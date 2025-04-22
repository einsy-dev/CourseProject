import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwt: JwtService,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validate(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return {
      access_token: this.jwt.sign({ email: user.email }),
    };
  }
}
