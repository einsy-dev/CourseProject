import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validate(email: string, password: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });
  }
}
