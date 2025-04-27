import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { JwtGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private jwt: JwtService,
  ) {}

  @UseGuards(JwtGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    return req.user;
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validate(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      access_token: this.jwt.sign({ email: user.email }),
    };
  }

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string }) {
    const user = await this.userService.create(body);
    if (!user) {
      throw new UnauthorizedException();
    }
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      access_token: this.jwt.sign({ email: user.email }),
    };
  }
}
