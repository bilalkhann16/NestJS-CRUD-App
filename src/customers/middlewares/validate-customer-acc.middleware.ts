import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware{
    use (req:Request,res: Response, next: NextFunction){
        const {valid} = req.headers;
        console.log('validcustomeraccount',valid);
        if (valid){
            next();
        } else{
            return res.status(404).send({error:'Account is invalid!'});
        }
    }
}