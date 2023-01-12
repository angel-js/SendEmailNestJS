import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateEmailDto {
  @IsEmail()
  @IsString()
  @MinLength(6)
  toemail: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(50)
  sub?: string;

  @MaxLength(300)
  @IsString()
  @MinLength(1)
  @IsOptional()
  message?: string;
}
