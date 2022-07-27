import { Exclude } from "class-transformer";

export interface User{
    username: string;
    password: string;
}

export class Serializeduser{
    username: string;

    @Exclude()
    password: string;
}