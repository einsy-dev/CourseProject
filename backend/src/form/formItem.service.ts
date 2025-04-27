import { FormItem } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FormItemService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: string): Promise<FormItem | null> {
    return await this.prisma.formItem.findUnique({
      where: {
        id,
      },
    });
  }

  async getAll({ offset = 0, limit = 10 }: { offset?: number; limit?: number } = {}): Promise<FormItem[]> {
    return await this.prisma.formItem.findMany({
      skip: offset,
      take: limit,
    });
  }

  async create(formItem: FormItem): Promise<FormItem> {
    return await this.prisma.formItem.create({
      data: formItem,
    });
  }

  async update(id: string, formItem: FormItem): Promise<FormItem> {
    return await this.prisma.formItem.update({
      where: {
        id,
      },
      data: formItem,
    });
  }

  async delete(id: string): Promise<FormItem> {
    return await this.prisma.formItem.delete({
      where: {
        id,
      },
    });
  }
}
