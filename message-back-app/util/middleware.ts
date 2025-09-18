import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const unknownEndpoint = (_request: Request, response: Response): void => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error : unknown, _request :Request, response: Response, next:NextFunction): void => {
    if (error instanceof mongoose.Error.CastError) {
        response.status(400).send({ error: 'malformatted id' })
    } else if (error instanceof mongoose.Error.ValidatorError) {
         response.status(400).json({ error: error.message })
    }
    next(error)
}

export { unknownEndpoint, errorHandler}