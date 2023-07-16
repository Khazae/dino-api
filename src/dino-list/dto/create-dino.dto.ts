import { Category } from '../schemas/dino.schema';

export class CreateDinoDto {
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly year: string;
  readonly deathYear: string;
  readonly category: Category;
}
