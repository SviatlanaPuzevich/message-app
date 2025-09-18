import mongoose from "mongoose";
import {IMessage} from "../types";

interface IMessageDocument extends IMessage, Document {}

const messageSchema = new mongoose.Schema<IMessageDocument>({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    phone: {
        type: String,
        required: true,
        match: [/^\+?[1-9]\d{7,14}$/, "Invalid phone number"],
    },
    message: {
        type: String,
        required: true,
        minlength: 2,
    }
})

messageSchema.set('toJSON', {
    transform: (_document, returnedObject: any) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const MessageModel = mongoose.model<IMessageDocument>('Message', messageSchema)
export {MessageModel, IMessageDocument}
