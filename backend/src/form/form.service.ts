import { Form } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: string): Promise<Form | null> {
    return await this.prisma.form.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        items: true,
      },
    });
  }

  async getAll({ offset = 0, limit = 10 }: { offset?: number; limit?: number } = {}): Promise<Form[]> {
    return await this.prisma.form.findMany({
      skip: offset,
      take: limit,
    });
  }

  async create(form: Form): Promise<Form> {
    return await this.prisma.form.create({
      data: form,
    });
  }

  async update(id: string, form: Form): Promise<Form> {
    return await this.prisma.form.update({
      where: {
        id,
      },
      data: form,
    });
  }

  async delete(id: string): Promise<Form> {
    return await this.prisma.form.delete({
      where: {
        id,
      },
    });
  }
}
