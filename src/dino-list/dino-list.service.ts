import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dino } from './schemas/dino.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class DinoListService {
  constructor(
    @InjectModel(Dino.name)
    private dinoModel: mongoose.Model<Dino>,
  ) {}

  async findAll(): Promise<Dino[]> {
    const dino = await this.dinoModel.find();
    return dino;
  }

  async create(dino: Dino): Promise<Dino> {
    const res = await this.dinoModel.create(dino);
    return res;
  }

  async findById(id: string): Promise<Dino> {
    const dino = await this.dinoModel.findById(id);
    if (!dino) {
      throw new NotFoundException('Dino not found.');
    }
    return dino;
  }

  async updateById(id: string, dino: Dino): Promise<Dino> {
    return await this.dinoModel.findByIdAndUpdate(id, dino, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Dino> {
    return await this.dinoModel.findByIdAndDelete(id);
  }
}
