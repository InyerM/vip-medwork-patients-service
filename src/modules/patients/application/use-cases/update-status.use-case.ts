// Core
import { Inject, NotFoundException } from '@nestjs/common';

// Domain
import { PATIENT_INJECTION_TOKEN } from '../../domain/constants/patient-injection-token.constant';
import { PatientRepository } from '../../domain/repositories/patient.repository';
import { Patient } from '../../domain/models/patient.model';

export class UpdateStatusUseCase {
  public constructor(
    @Inject(PATIENT_INJECTION_TOKEN)
    private readonly patientRepository: PatientRepository,
  ) {}

  public async execute(id: string, statusId: string): Promise<Patient> {
    const patient = await this.patientRepository.findById(id);
    if (!patient) throw new NotFoundException('Patient not found');

    patient.statusId = statusId;
    return this.patientRepository.update(patient);
  }
}
