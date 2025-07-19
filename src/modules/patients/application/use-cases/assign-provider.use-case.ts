// Core
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

// Domain
import { PatientRepository } from '@/modules/patients/domain/repositories/patient.repository';
import { PATIENT_INJECTION_TOKEN } from '../../domain/constants/patient-injection-token.constant';

@Injectable()
export class AssignProviderUseCase {
  public constructor(
    @Inject(PATIENT_INJECTION_TOKEN) private readonly patientRepository: PatientRepository,
  ) {}

  public async execute(patientId: string, providerId: string): Promise<void> {
    const patient = await this.patientRepository.findById(patientId);
    if (!patient) throw new NotFoundException('Patient not found');

    patient.providerId = providerId;
    await this.patientRepository.update(patient);
  }
}
