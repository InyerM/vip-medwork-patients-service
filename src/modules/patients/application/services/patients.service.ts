// Core
import { Injectable } from '@nestjs/common';

// Application
import { CreatePatientDto } from '../dto/create-patient.dto';
import { AssignProviderDto } from '../dto/assign-provider.dto';
import { CreatePatientUseCase } from '../use-cases/create-patient.use-case';
import { AssignProviderUseCase } from '../use-cases/assign-provider.use-case';
import { FindByIdUseCase } from '../use-cases/find-by-id.use-case';
import { UpdateStatusUseCase } from '../use-cases/update-status.use-case';

// Domain
import { Patient } from '../../domain/models/patient.model';

@Injectable()
export class PatientsService {
  public constructor(
    private readonly createPatientUseCase: CreatePatientUseCase,
    private readonly assignProviderUseCase: AssignProviderUseCase,
    private readonly findByIdUseCase: FindByIdUseCase,
    private readonly updateStatusUseCase: UpdateStatusUseCase,
  ) {}

  public create(dto: CreatePatientDto): Promise<Patient> {
    return this.createPatientUseCase.execute(dto);
  }

  public assignProvider(patientId: string, dto: AssignProviderDto): Promise<void> {
    return this.assignProviderUseCase.execute(patientId, dto.providerId);
  }

  public findById(id: string): Promise<Patient | null> {
    return this.findByIdUseCase.execute(id);
  }

  public updateStatus(id: string, statusId: string): Promise<Patient> {
    return this.updateStatusUseCase.execute(id, statusId);
  }
}
