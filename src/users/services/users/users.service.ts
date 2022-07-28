import { Injectable } from '@nestjs/common';
import { Serializeduser, User } from 'src/users/types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
    private users: User[]= [
        {
            id: 1,
            username: 'anson',
            password: 'anson'
        },
        {
            id: 2,
            username: 'danny',
            password: 'danny'
        },
        {
            id: 3,
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

    // getUserById(id:number){
    //     return this.users.find((user) => user.username === username);
    // }
}
