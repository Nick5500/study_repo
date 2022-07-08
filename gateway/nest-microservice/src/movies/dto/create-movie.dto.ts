import { IsArray, IsInt, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  name: string;

  @IsInt()
  rating: number;

  @IsArray()
  time: string[];
}
