import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connection to mongodb Succesfull")

    } catch (error) {
        console.log("Error connecting to de database", error.message)
    }
}

export default connectMongoDB;