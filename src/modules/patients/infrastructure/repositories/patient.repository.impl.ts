// Core
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Domain
import { PatientRepository } from '@/modules/patients/domain/repositories/patient.repository';
import { Patient } from '@/modules/patients/domain/models/patient.model';

// Infrastructure
import { PatientEntity } from '@/modules/patients/infrastructure/entities/patient.entity';
import { PatientMapper } from '@/modules/patients/infrastructure/mappers/patient.mapper';

@Injectable()
export class PatientRepositoryImpl implements PatientRepository {
  public constructor(
    @InjectRepository(PatientEntity)
    private readonly repository: Repository<PatientEntity>,
  ) {}

  public async create(patient: Patient): Promise<Patient> {
    const entity = this.repository.create(PatientMapper.toPersistence(patient));
    const saved = await this.repository.save(entity);
    return PatientMapper.toDomain(saved);
  }

  public async findById(id: string): Promise<Patient | null> {
    const entity = await this.repository.findOneBy({ id });
    return entity ? PatientMapper.toDomain(entity) : null;
  }

  public async findAll(): Promise<Patient[]> {
    const entities = await this.repository.find();
    return entities.map((entity) => PatientMapper.toDomain(entity));
  }

  public async update(patient: Patient): Promise<Patient> {
    await this.repository.save(PatientMapper.toPersistence(patient));
    return patient;
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  public async findByEmail(email: string): Promise<Patient | null> {
    const entity = await this.repository.findOneBy({ email });
    return entity ? PatientMapper.toDomain(entity) : null;
  }

  public async existsByEmail(email: string): Promise<boolean> {
    return this.repository.existsBy({ email });
  }
}
