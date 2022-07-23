import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'root',
      database: 'node_postgres',
      models: [],
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
