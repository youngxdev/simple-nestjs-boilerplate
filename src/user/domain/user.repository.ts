import { User } from './user';

export interface UserRepository {
  // 유저 등록
  create(user: User): Promise<User>;
  
  // 유저 조회
  findOne(id: number): Promise<User | undefined>;
}
