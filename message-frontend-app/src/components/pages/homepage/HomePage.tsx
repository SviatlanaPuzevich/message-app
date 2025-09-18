import React from "react";
import { Button, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const { Title } = Typography;

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <Title level={2}>Добро пожаловать! Давайте протестируем приложение по сохранению сообщений</Title>
                <Button
                    type="primary"
                    size="large"
                    className={styles.greenButton}
                    onClick={() => navigate("/messages")}
                >
                    Далее
                </Button>
            </Card>
        </div>
    );
};

export default HomePage;
