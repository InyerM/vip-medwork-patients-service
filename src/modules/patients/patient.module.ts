// Core
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Infrastructure
import { PatientEntity } from './infrastructure/entities/patient.entity';
import { PatientRepositoryImpl } from './infrastructure/repositories/patient.repository.impl';

// Application
import { CreatePatientUseCase } from './application/use-cases/create-patient.use-case';
import { AssignProviderUseCase } from './application/use-cases/assign-provider.use-case';
import { FindByIdUseCase } from './application/use-cases/find-by-id.use-case';
import { UpdateStatusUseCase } from './application/use-cases/update-status.use-case';
import { FindAllUseCase } from './application/use-cases/find-all.use-case';
import { UnassignProviderUseCase } from './application/use-cases/unassign-provider.use-case';
import { PatientsService } from './application/services/patients.service';

// Interfaces
import { PatientsController } from './interfaces/controllers/patients.controller';

// Domain
import { PATIENT_INJECTION_TOKEN } from './domain/constants/patient-injection-token.constant';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity])],
  controllers: [PatientsController],
  providers: [
    PatientRepositoryImpl,
    CreatePatientUseCase,
    AssignProviderUseCase,
    FindByIdUseCase,
    UpdateStatusUseCase,
    FindAllUseCase,
    UnassignProviderUseCase,
    PatientsService,
    {
      provide: PATIENT_INJECTION_TOKEN,
      useExisting: PatientRepositoryImpl,
    },
  ],
})
export class PatientModule {}
