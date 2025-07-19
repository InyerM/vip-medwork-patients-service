// Core
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Utils
import { getEnv } from '@/common/utils/get-env.util';

// Entities
import { PatientEntity } from '../patients/infrastructure/entities/patient.entity';

const env = getEnv();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.postgres.host,
      port: env.postgres.port,
      username: env.postgres.user,
      password: env.postgres.password,
      database: env.postgres.database,
      synchronize: true,
      entities: [PatientEntity],
      logging: true,
    }),
  ],
})
export class TypeormModule {}
