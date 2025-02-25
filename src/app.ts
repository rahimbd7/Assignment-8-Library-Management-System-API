import express, { Application, NextFunction, Request, Response } from "express";

import cors from 'cors'

import router from "./app/routes/routes";
import httpStatus from 'http-status'
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import cookieParser from "cookie-parser";
const app: Application = express();



app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//users apis
// app.use('/api', router)
app.use('/api', router)

// app.use(globalErrorHandler)

//not found route
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found'
            }
        ]
    })
    next()
})

export default app;