import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mon_pendencias',
  password: '123mudar*',
  database: 'mon_pendencias',
  entities: [__dirname + '/../**/entities/*.entity.{js,ts}'],
  synchronize: true,
};