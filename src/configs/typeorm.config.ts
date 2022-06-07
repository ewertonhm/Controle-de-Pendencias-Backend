import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'sngesp.,',
  database: 'mon_pendencias',
  entities: [__dirname + '/../**/entities/*.entity.{js,ts}'],
  synchronize: false,
};
