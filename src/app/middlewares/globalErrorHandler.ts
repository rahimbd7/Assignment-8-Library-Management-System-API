import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status';
import { ZodError } from "zod";



const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof ZodError) {
        return res.status(httpStatus.BAD_REQUEST).json({
            success: false,
            message: "Validation Error",
            error: err
        })
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err?.meta?.cause || "Something went wrong",
        error: err
    })
    // next();

}

export default globalErrorHandler