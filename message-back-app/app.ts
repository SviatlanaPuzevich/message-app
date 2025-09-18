import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {MONGODB_URL} from "./util/config";
import messagesRouter from "./routes/messages";
import logger from "./util/logger";
import {unknownEndpoint, errorHandler} from "./util/middleware";

const app = express()
if (MONGODB_URL) {
    logger.info('connecting to', MONGODB_URL)
    mongoose.connect(MONGODB_URL)
        .then(() => {
            logger.info('Connected to the database')
        })
        .catch((err) => {
            logger.error('error connection to MongoDB:', err.message)
        });
} else {
    logger.error('connection string to MongoDB is undefined')
}

app.use(cors())
app.use(express.static('dist'));
app.use(express.json());

app.use('/messages', messagesRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;