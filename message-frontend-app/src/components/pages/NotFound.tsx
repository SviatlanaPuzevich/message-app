import { useNavigate } from "react-router-dom";
import {Button, Result} from "antd";

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Result
            status="404"
            title="404"
            subTitle="Страница не найдена"
            extra={
                <Button type="primary" onClick={() => navigate("/")}>
                    На главную
                </Button>
            }
        />
    );
};

export default NotFound;