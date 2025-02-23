import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"



const validateRequest = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.parseAsync(req.body)
        // console.log('validation', req.body);
        return next()
    } catch (error) {
        // console.error('validation errors: ', error);
        next(error)
    }
}

export default validateRequest