// Core
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

// Domain
import { PatientRepository } from '@/modules/patients/domain/repositories/patient.repository';
import { Patient } from '@/modules/patients/domain/models/patient.model';
import { PATIENT_INJECTION_TOKEN } from '../../domain/constants/patient-injection-token.constant';

// Application
import { CreatePatientDto } from '@/modules/patients/application/dto/create-patient.dto';

// Infrastructure
import { PatientMapper } from '../../infrastructure/mappers/patient.mapper';

@Injectable()
export class CreatePatientUseCase {
  public constructor(
    @Inject(PATIENT_INJECTION_TOKEN) private readonly patientRepository: PatientRepository,
  ) {}

  public async execute(dto: CreatePatientDto): Promise<Patient> {
    const patientExists = await this.patientRepository.existsByEmail(dto.email);

    if (patientExists)
      throw new NotFoundException(`Patient with email ${dto.email} already exists`);

    const newPatient = PatientMapper.toPersistence({
      fullName: dto.fullName,
      email: dto.email,
      phone: dto.phone,
      providerId: null,
      statusId: null,
    });

    return this.patientRepository.create(newPatient);
  }
}
