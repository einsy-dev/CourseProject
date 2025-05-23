import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async create(user: { name: string; email: string; password: string }): Promise<User> {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async update(id: string, user: { name: string; email: string; password: string }): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async delete(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
