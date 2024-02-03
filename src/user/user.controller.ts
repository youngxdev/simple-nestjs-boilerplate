import { Controller, Post, Get, Param, Body, Res } from '@nestjs/common';
import { User } from './domain/user';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller({
    path: 'users',
    version: '1'
})
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
    }
}