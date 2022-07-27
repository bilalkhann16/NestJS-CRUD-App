import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddressDto";

// the pattern how the POST request being generated.
export class CreateCustomerDto{
    @IsEmail()
    email: string;

    @IsNumberString()
    id: number;

    @IsNotEmpty()
    name: string;

    @ValidateNested()
    @IsNotEmptyObject()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;
}