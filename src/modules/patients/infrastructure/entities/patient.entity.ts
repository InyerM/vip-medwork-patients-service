// src/infrastructure/persistence/typeorm/entities/patient.orm-entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('patients')
export class PatientEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Patient ID',
  })
  public id: string;

  @Column({ name: 'full_name', type: 'varchar', length: 255 })
  @ApiProperty({
    example: 'John Doe',
    description: 'Patient full name',
  })
  public fullName: string;

  @Column({ name: 'email', type: 'varchar', length: 255, unique: true })
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Patient email',
  })
  public email: string;

  @Column({ name: 'phone', type: 'varchar', length: 255 })
  @ApiProperty({
    example: '1234567890',
    description: 'Patient phone',
  })
  public phone: string;

  @Column({ name: 'provider_id', nullable: true, type: 'uuid' })
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Provider ID',
  })
  public providerId: string | null;

  @Column({ name: 'status_id', nullable: true, type: 'uuid' })
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Status ID',
  })
  public statusId: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  @ApiProperty({
    example: '2023-01-01T00:00:00.000Z',
    description: 'Patient creation date',
  })
  public createdAt: Date;
}
