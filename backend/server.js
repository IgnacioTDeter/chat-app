import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js'
import authRoutes from './routes/auth.routes.js'

const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server running on port ${PORT}`);
});


app.use(express.json()) // Middleware para analizar el JSON en el cuerpo de las solicitudes

app.use("/api/auth", authRoutes)


app.get("/", (req, res) => {
    res.send("Hello world");
});
