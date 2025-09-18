import React from "react";
import {Form, Input, Button, message as antMessage} from "antd";
import type {IMessage, IMessageInput} from "../../types";
import messagesService from "../services/messages.ts";

interface Props {
    onCreateMessage: (values: IMessage) => void,
}

const MessageForm: React.FC<Props> = ({onCreateMessage}: Props) => {
    const [form] = Form.useForm<IMessageInput>();

    const onFinish = async (values: IMessageInput) => {
        try {
            const message: IMessage = await messagesService.create(values);
            onCreateMessage(message);
            antMessage.success("Сообщение отправлено!");
            form.resetFields();
        } catch (err) {
            antMessage.error("Ошибка отправки");
            console.error(err);
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{maxWidth: 400, margin: "0 auto", padding: "20px"}}
        >
            <Form.Item
                label="Имя"
                name="name"
                rules={[
                    {required: true, message: "Пожалуйста, введите имя"},
                    {min: 2, message: "Имя должно быть минимум 2 символа"},
                ]}
            >
                <Input placeholder="Введите ваше имя"/>
            </Form.Item>

            <Form.Item
                label="Телефон"
                name="phone"
                rules={[
                    {required: true, message: "Пожалуйста, введите телефон"},
                    {
                        pattern: /^((\+375)(25|29|33|44)\d{7}|(80)(25|29|33|44)\d{7})$/,
                        message: "Введите корректный номер телефона",
                    },
                ]}
            >
                <Input placeholder="+375123456789"/>
            </Form.Item>

            <Form.Item
                label="Сообщение"
                name="message"
                rules={[
                    {required: true, message: "Пожалуйста, введите сообщение"},
                    {min: 2, message: "Сообщение должно быть минимум 2 символа"},
                ]}
            >
                <Input.TextArea rows={4} placeholder="Ваше сообщение"/>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{backgroundColor: "#52c41a", borderColor: "#52c41a"}}
                >
                    Отправить
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MessageForm;
