import mongoose, { mongo } from "mongoose";

const conversationSchema = new mongoose.Schema({

    participant: [
        {
            typeof: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            typeof: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        }
    ]
}, {timestamps: true})

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation