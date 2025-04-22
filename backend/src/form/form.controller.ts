import { Controller, Get } from '@nestjs/common';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}
  @Get()
  async getOne() {
    return await this.formService.getOne('cm9rbmix20000i5pnmfvvg8et');
  }
}
