import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/types/Customer';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
   private customers:Customer[]  = [
    {
        id: 1,
        email: 'danny@gmail.com',
        name: 'Danny'
    },
    {
        id: 2,
        email: 'bilal@gmail.com',
        name: 'Bilal'
    },
    {
        id: 3,
        email: 'ahsan@gmail.com',
        name: 'Ahsan'
    }
   ]
    
    findCustomerById(id:number){
        return this.customers.find(user => user.id === id);
    }

    createCustomer(customerDto:CreateCustomerDto){
        this.customers.push(customerDto);
    }
    getCustomers(){
        return this.customers;
    }
}