import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types/Users';

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
        return this.users;
    }
    getUsersByUsername(username: string){
        return this.users.find(user) => user.username === username);
    }
}
