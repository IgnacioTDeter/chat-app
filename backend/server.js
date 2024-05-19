import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server running on port ${PORT}`);
});

app.use("/api/auth", authRoutes)


app.get("/", (req, res) => {
    res.send("Hello world");
});
