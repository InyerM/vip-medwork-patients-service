import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty({ example: 'Juan Pérez' })
  @IsString()
  @IsNotEmpty()
  public fullName: string;

  @ApiProperty({ example: 'juan@example.com' })
  @IsEmail()
  public email: string;

  @ApiProperty({ example: '+57 3001234567' })
  @IsString()
  @Matches(/^[0-9+()\-\s]+$/, {
    message: 'Phone must be a valid format',
  })
  public phone: string;
}
