import { NextFunction, Request, Response } from "express";

export class UserMiddleware {
    userValidator(req:Request, res:Response, next:NextFunction) {
        const {} = req.body;
    }
}