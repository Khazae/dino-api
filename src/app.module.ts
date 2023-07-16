import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DinoListModule } from './dino-list/dino-list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DinoCategoryModule } from './dino-category/dino-category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    DinoListModule,
    DinoCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
