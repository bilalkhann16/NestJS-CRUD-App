import { Injectable } from '@nestjs/common';
import { Serializeduser, User } from 'src/users/types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
    private users: User[]= [
        {
            username: 'anson',
            password: 'anson'
        },
        {
            username: 'danny',
            password: 'danny'
        },
        {
            username: 'bilal',
            password: 'bilal'
        },
    ];
    getUsers(){
        return this.users.map((user) => plainToClass(Serializeduser, user));
    }
    getUsersByUsername(username: string){
        return this.users.find((user) => user.username === username);
    }
}
