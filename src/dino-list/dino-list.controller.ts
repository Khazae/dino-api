import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DinoListService } from './dino-list.service';
import { Dino } from './schemas/dino.schema';
import { CreateDinoDto } from './dto/create-dino.dto';

@Controller('dino')
export class DinoListController {
  constructor(private dinoService: DinoListService) {}

  @Get()
  async getAllDino(): Promise<Dino[]> {
    return this.dinoService.findAll();
  }

  @Get(':id')
  async getDino(
    @Param('id')
    id: string,
  ): Promise<Dino> {
    return this.dinoService.findById(id);
  }

  @Post()
  async createDino(
    @Body()
    dino: CreateDinoDto,
  ): Promise<Dino> {
    return this.dinoService.create(dino);
  }

  @Put(':id')
  async updateDino(
    @Param('id')
    id: string,
    @Body()
    dino: CreateDinoDto,
  ): Promise<Dino> {
    return this.dinoService.updateById(id, dino);
  }

  @Delete(':id')
  async deleteDino(
    @Param('id')
    id: string,
  ): Promise<Dino> {
    return this.dinoService.deleteById(id);
  }
}
