import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/excpetions/UserNotFound.exception';
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
    @Get('/username/:username')
    getByUsername(@Param ('username') username: string){
        const user = this.userService.getUsersByUsername(username);
        
        if (user) return new Serializeduser(user);
        else throw new HttpException("user not found", HttpStatus.BAD_REQUEST);
    }

    // @Get('id/:id')
    // getUserById(@Param ('id', ParseIntPipe) id: number){
    //     const user = this.userService.getUserById(id);
        
    //     if (user) return new Serializeduser(user);
    //     else{
    //         throw new UserNotFoundException();
    //     }
    // }
}
