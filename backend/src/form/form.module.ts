import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FormItemService } from './formItem.service';

@Module({
  imports: [PrismaModule],
  controllers: [FormController],
  providers: [FormService, FormItemService],
})
export class FormModule {}
