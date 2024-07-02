import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body; // Obtiene los datos del cuerpo de la solicitud


		const user = await User.findOne({ username }); // Busca si ya existe un usuario con el mismo nombre de usuario

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		// HASH PASSWORD 
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);


		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		//Crea un nuevo objeto de usuario con la contraseña hasheada y la URL de la imagen de perfil
		const newUser = new User({
			fullName,
			username,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

		if (newUser) {
			// Genera un token JWT y lo establece como una cookie en la respuesta
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save(); // Guarda el nuevo usuario en la base de datos

			// Devuelve los detalles básicos del usuario como respuesta
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" }); // Si los datos del usuario son inválidos
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body; // Obtiene los datos del cuerpo de la solicitud
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
		

		if (!user || !isPasswordCorrect) { // Si el usuario no existe o la contraseña es incorrecta
			return res.status(400).json({ error: "Invalid username or password" });
		}

		// Genera un token JWT y lo establece como una cookie en la respuesta
		generateTokenAndSetCookie(user._id, res);

		// Devuelve los detalles básicos del usuario como respuesta
		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 }); // Limpia la cookie jwt estableciendo su tiempo de vida en 0
		res.status(200).json({ message: "Logged out successfully" }); // Devuelve un mensaje de éxito al cerrar sesión
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};