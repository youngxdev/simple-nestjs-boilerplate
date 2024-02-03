import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepositoryImplement } from './user.repository';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepositoryImplement,
    {
      provide: UserService,
      useFactory: (repo: UserRepositoryImplement) => new UserService(repo),
      inject: [UserRepositoryImplement],
    },
  ],
})
export class UserModule {}