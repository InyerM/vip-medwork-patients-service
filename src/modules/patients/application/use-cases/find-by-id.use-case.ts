// Core
import { Inject, Injectable } from '@nestjs/common';

// Domain
import { PatientRepository } from '@/modules/patients/domain/repositories/patient.repository';
import { Patient } from '@/modules/patients/domain/models/patient.model';
import { PATIENT_INJECTION_TOKEN } from '@/modules/patients/domain/constants/patient-injection-token.constant';

@Injectable()
export class FindByIdUseCase {
  public constructor(
    @Inject(PATIENT_INJECTION_TOKEN) private readonly patientRepository: PatientRepository,
  ) {}

  public async execute(id: string): Promise<Patient | null> {
    return this.patientRepository.findById(id);
  }
}
