import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: User) {
    return this.userService.create(body);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }
}
