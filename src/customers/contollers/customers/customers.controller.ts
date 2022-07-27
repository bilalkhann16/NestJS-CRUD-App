import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from "express";
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
    constructor (private customersService:CustomersService){}
    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe)id:number,
    @Req() req:Request, 
    @Res() res:Response){
        const customer =  this.customersService.findCustomerById(id);
        if (customer){
            console.log('customer',customer);
            res.send (customer);
        } else{
            res.status(400).send('Customer not found');
        }
    }
    // @Get('/search/:id')
    // searchCustomerById(@Param('id', ParseIntPipe)id:number){

    @Get('')
    getAllCustomers(){
        return this.customersService.getCustomers();
    }

    //easy way to get the request object is @Req() req:Request but we can also use the DTOs to get the request object
    // @Post('create')
    // createCustomer(@Body() createCustomerDtos:CreateCustomerDto){
    //     // this.customersService.createCustomer(createCustomerDto);
    // }

    @Post('create')
     @UsePipes(ValidationPipe)
    createcustomer(@Body() dto:CreateCustomerDto){
        this.customersService.createCustomer(dto);
        // res.send(createCustomerDtos);
    }
}
