import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';
import { FormModule } from './form/form.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [FormModule, PrismaModule, AuthModule, UserModule],
  controllers: [AppController, FormController],
  providers: [AppService, FormService],
})
export class AppModule {}
