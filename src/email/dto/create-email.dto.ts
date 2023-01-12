import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateEmailDto {
  // This is an email address, to be a String and required
  @IsEmail()
  @IsString()
  @MinLength(6)
  @MaxLength(80)
  toemail: string;

  // This is a subject of Mail, to be a String and Optional
  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(50)
  sub?: string;

  // This is a message of Mail, to be a String and Optional
  @MaxLength(300)
  @IsString()
  @MinLength(1)
  @IsOptional()
  message?: string;
}
