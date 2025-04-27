import { Module } from '@nestjs/common';
import { FormModule } from './form/form.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [FormModule, PrismaModule, AuthModule, UserModule],
})
export class AppModule {}
