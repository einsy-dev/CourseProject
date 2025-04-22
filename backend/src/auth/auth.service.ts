import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwt: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<User | null> {
    console.log(email, password);
    const user = await this.userService.findOne(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
