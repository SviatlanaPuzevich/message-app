import type {IMessage, IMessageInput} from "../../types";
import apiClient    from "../util/apiClient";

const baseUrl = '/messages'


const getAll = async (): Promise<Array<IMessage>> => {
    const response = await apiClient.get(baseUrl);
    return response.data;
}

const create = async (message: IMessageInput): Promise<IMessage> => {
    const response = await apiClient.post(baseUrl, message);
    return response.data;
}


export default { getAll, create}