import React from "react";
import { List, Card, Typography } from "antd";
import type { IMessage } from "../../types";

const { Text, Title } = Typography;

interface IMessageListProps {
    messages: IMessage[];
}

const MessageList: React.FC<IMessageListProps> = ({ messages }) => {
    return (
        <Card title={<Title level={3}>Список сообщений</Title>} style={{ maxWidth: 600, margin: "0 auto" }}>
            <List
                itemLayout="horizontal"
                dataSource={messages}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Text strong>{item.name}</Text>}
                            key={item.id}
                            description={
                                    <Text>{item.message}</Text>
                            }
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default MessageList;
