import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

// the pattern how our using the Post request.
export class CreateCustomerDto{
    @IsEmail()
    email: string;

    @IsNumber()
    id: number;

    @IsNotEmpty()
    name: string;
}