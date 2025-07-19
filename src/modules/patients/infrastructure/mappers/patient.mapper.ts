// Domain
import type { Patient } from '@/modules/patients/domain/models/patient.model';

// Infrastructure
import { PatientEntity } from '@/modules/patients/infrastructure/entities/patient.entity';

export class PatientMapper {
  public static toDomain(entity: PatientEntity): Patient {
    return {
      id: entity.id,
      fullName: entity.fullName,
      email: entity.email,
      phone: entity.phone,
      providerId: entity.providerId,
      statusId: entity.statusId,
      createdAt: entity.createdAt,
    };
  }

  public static toPersistence(domain: Omit<Patient, 'id' | 'createdAt'>): PatientEntity {
    const entity = new PatientEntity();
    entity.fullName = domain.fullName;
    entity.email = domain.email;
    entity.phone = domain.phone;
    entity.providerId = domain.providerId ?? null;
    entity.statusId = domain.statusId ?? null;
    return entity;
  }
}
