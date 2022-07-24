import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import express, { Request, Response } from "express";
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor (private customersService:CustomersService){}
    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe)id:number,
    @Req() req:Request, 
    @Res() res:Response){
        const customer =  this.customersService.findCustomerById(id);
        if (customer){
            res.send(customer);
        } else{
            res.status(400).send('Customer not found');
        }

    } 
}
