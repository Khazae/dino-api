import { Module } from '@nestjs/common';
import { DinoListService } from './dino-list.service';
import { DinoListController } from './dino-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DinoSchema } from './schemas/dino.schema';

@Module({
  providers: [DinoListService],
  controllers: [DinoListController],
  imports: [MongooseModule.forFeature([{ name: 'Dino', schema: DinoSchema }])],
})
export class DinoListModule {}
