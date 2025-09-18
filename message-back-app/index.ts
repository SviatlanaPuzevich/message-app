import {PORT} from "./util/config";
import logger from "./util/logger"
import app from "./app";

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});