import { IsArray, IsInt, IsString } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  name?: string;

  @IsInt()
  rating?: number;

  @IsArray()
  time?: string[];
}
