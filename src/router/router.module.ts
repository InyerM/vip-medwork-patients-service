// Core
import { Module } from '@nestjs/common';
import { RouterModule as NRouterModule } from '@nestjs/core';

// Modules
import { HealthModule } from '@/modules/health/health.module';
import { PatientModule } from '@/modules/patients/patient.module';

@Module({
  imports: [
    HealthModule,
    PatientModule,
    NRouterModule.register([
      {
        path: '/health',
        module: HealthModule,
      },
    ]),
  ],
})
export class RouterModule {}
