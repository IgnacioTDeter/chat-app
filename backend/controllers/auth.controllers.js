import User from '../models/user.model.js';
import bycript from 'bcryptjs';


export const login = (req, res) => {
    console.log("LoginUser");
    res.send("Login successful");

};

export const signup = async (req, res) => {
    console.log(req.body)
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body;
        console.log(req.body)

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		const salt = await  bycript.genSalt(10);
		const hashedPassword = await bycript.hash(password, salt)
		// https://avatar-placeholder.iran.liara.run/

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = new User({
			fullName,
			username,
			password:hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

		if (newUser) {
			
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
    console.log("logoutUser");
    res.send("Logout successful");
};
