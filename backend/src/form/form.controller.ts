import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FormService } from './form.service';
import { Form, FormItem } from '@prisma/client';
import { FormItemService } from './formItem.service';

@Controller('form')
export class FormController {
  constructor(
    private readonly formService: FormService,
    private readonly formItemService: FormItemService,
  ) {}
  @Post()
  async create(@Body() body: Form) {
    return await this.formService.create(body).catch((e) => e);
  }

  @Get('all')
  async getAll() {
    return (await this.formService.getAll()) || [];
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.formService.getOne(id);
  }

  @Post('item')
  async createItem(@Body() body: FormItem) {
    return await this.formItemService.create(body);
  }
}
