import { Request, Response } from "express";

export class ProductsController {
    //DI
    constructor() {}

    getProducts = (req: Request, res:Response)=>{
        res.json({message: 'Get Products'});
    }

}