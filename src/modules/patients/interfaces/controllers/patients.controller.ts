// Core
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

// Application
import { PatientsService } from '@/modules/patients/application/services/patients.service';
import { CreatePatientDto } from '@/modules/patients/application/dto/create-patient.dto';
import { AssignProviderDto } from '@/modules/patients/application/dto/assign-provider.dto';
import { UpdateStatusDto } from '@/modules/patients/application/dto/update-status.dto';

// Domain
import { Patient } from '@/modules/patients/domain/models/patient.model';

@Controller('patients')
export class PatientsController {
  public constructor(private readonly patientsService: PatientsService) {}

  @MessagePattern('patients.create')
  public create(@Payload() dto: CreatePatientDto): Promise<Patient> {
    return this.patientsService.create(dto);
  }

  @MessagePattern('patients.assign_provider')
  public handleAssignProvider(
    @Payload() data: { patientId: string; payload: AssignProviderDto },
  ): Promise<void> {
    return this.patientsService.assignProvider(data.patientId, data.payload);
  }

  @MessagePattern('patients.findById')
  public findById(@Payload() id: string): Promise<Patient | null> {
    return this.patientsService.findById(id);
  }

  @MessagePattern('patients.update_status')
  public updateStatus(
    @Payload() data: { patientId: string; payload: UpdateStatusDto },
  ): Promise<Patient> {
    return this.patientsService.updateStatus(data.patientId, data.payload.statusId);
  }

  @MessagePattern('patients.findAll')
  public findAll(): Promise<Patient[]> {
    return this.patientsService.findAll();
  }
}
