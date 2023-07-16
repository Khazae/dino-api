import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  ADVENTURE = 'Adventure',
  FANTASY = 'FantASY',
}

@Schema({
  timestamps: true,
})
export class Dino {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  year: string;

  @Prop()
  deathYear: string;

  @Prop()
  category: Category;
}

export const DinoSchema = SchemaFactory.createForClass(Dino);
