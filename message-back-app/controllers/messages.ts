import { IMessageInput} from "../types";
import { MessageModel, IMessageDocument } from "../model/Message";

const getAll = async (): Promise<IMessageDocument[]> => {
    return await MessageModel.find({});
};

const save = async (messageToSave: IMessageInput): Promise<IMessageDocument> => {
    const message = new MessageModel(messageToSave);
    return await message.save();
};

export { getAll, save };
