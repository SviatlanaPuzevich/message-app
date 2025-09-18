import express, { Request, Response, NextFunction } from "express";
import { getAll, save } from "../controllers/messages";
import { IMessage, IMessageInput } from "../types";

const router = express.Router();

router.get("/", async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const messages: IMessage[] = await getAll();
        res.json(messages);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, phone, message }: IMessageInput = req.body;
        const newMessage: IMessage = await save({ name, phone, message });
        res.status(201).json(newMessage);
    } catch (error) {
        next(error);
    }
});

export default router;
