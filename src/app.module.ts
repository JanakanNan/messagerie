import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MessageModule } from './message/message.module';
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({ rootPath: `${process.cwd()}/public` }),
    MessageModule,
      AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
