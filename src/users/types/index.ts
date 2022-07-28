import { Exclude } from "class-transformer";

export interface User{
    id: number;
    username: string;
    password: string;
}

export class Serializeduser{
    id: number;
    username: string;

    @Exclude()
    password: string;

    constructor(partial:Partial<Serializeduser>){
        Object.assign(this,partial)
    }
}