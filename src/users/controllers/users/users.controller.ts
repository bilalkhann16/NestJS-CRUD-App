import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { Serializeduser } from 'src/users/types';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService ){}
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers(){
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    getByUsername(@Param ('username') username: string){
        const user = this.userService.getUsersByUsername(username);
        
        if (user) return new Serializeduser(user);
        else throw new HttpException("user not found", HttpStatus.BAD_REQUEST);
    }
}
