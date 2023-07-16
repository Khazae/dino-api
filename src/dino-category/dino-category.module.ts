import { Module } from '@nestjs/common';
import { DinoCategoryService } from './dino-category.service';
import { DinoCategoryController } from './dino-category.controller';

@Module({
  providers: [DinoCategoryService],
  controllers: [DinoCategoryController],
  imports: [],
})
export class DinoCategoryModule {}
