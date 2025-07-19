import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AssignProviderDto {
  @ApiProperty({ example: '6a2e3e74-0d2e-4b8f-9c94-f187c3a6a9b4' })
  @IsUUID()
  public providerId: string;
}
