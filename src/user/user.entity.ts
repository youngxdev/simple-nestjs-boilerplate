import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from './domain/user';
@Entity()
export class UserEntity implements User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ unique: true })
  email: string;
}