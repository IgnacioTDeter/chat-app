import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	// Genera un token JWT firmado con userId como payload y JWT_SECRET como clave secreta
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	console.log("Generated Token: ", token); // Add this line for debugging

	// Configura una cookie en la respuesta (res) con el token JWT
	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // La cookie solo es accesible para HTTP, previene ataques XSS (cross-site scripting)
		sameSite: "strict", // Restringe el envío de cookies en solicitudes cross-site para prevenir ataques CSRF (cross-site request forgery)
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;