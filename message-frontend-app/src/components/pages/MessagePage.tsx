import MessageForm from "../MessageForm";
import MessageList from "../MessageList";
import {useEffect, useState} from "react";
import type {IMessage} from "../../../types";
import messageService from "../../services/messages.ts";

const MessagePage = ()=>{
    const [messages, setMessages] = useState<IMessage[]>([]);
    useEffect(() => {
        const fetchMessagesList = async () => {
            try {
                const messages = await messageService.getAll();
                setMessages(messages);
                console.log(messages);
            } catch (err) {
                console.error(err);
            }
        };
        fetchMessagesList();
    }, []);
    return (<>
        <MessageForm onCreateMessage={(newMessage) => setMessages( [...messages, newMessage])} />
        <MessageList messages={messages}/>
    </>)
}

export default MessagePage