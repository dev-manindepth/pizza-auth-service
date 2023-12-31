/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction } from "express";
import { Request, Response } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";
import createError from "http-errors";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to Auth Service" });
});

app.use(
    (err: HttpError, req: Request, res: Response, next: NextFunction): void => {
        logger.error(err.message);
        const statusCode = err.statusCode || 500;
        res.status(statusCode).json({
            errors: [
                { type: err.name, msg: err.message, path: "", location: "" },
            ],
        });
    },
);
export default app;
