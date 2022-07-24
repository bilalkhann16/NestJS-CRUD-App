import { Module } from '@nestjs/common';
import { CustomersController } from './contollers/customers/customers.controller';

@Module({
  controllers: [CustomersController]
})
export class CustomersModule {}
