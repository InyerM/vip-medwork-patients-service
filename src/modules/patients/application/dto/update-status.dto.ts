import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UpdateStatusDto {
  @IsUUID()
  @ApiProperty({ description: 'Status ID (UUID)' })
  public statusId: string;
}
