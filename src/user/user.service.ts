import { Injectable } from '@nestjs/common';
import { User } from './domain/user';
import { UserRepositoryImplement } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepositoryImplement) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // TODO: class-transformer
    const { id, username, email} = createUserDto;
    const user = new User(id, username, email);
    return await this.userRepository.create(user);
  }
}