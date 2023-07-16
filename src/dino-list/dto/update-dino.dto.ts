import { Category } from '../schemas/dino.schema';

export class UpdateDinoDto {
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly year: string;
  readonly deathYear: string;
  readonly category: Category;
}
