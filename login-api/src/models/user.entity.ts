import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity('user')
export default class User {

  @PrimaryGeneratedColumn(
    'uuid', {
    name: 'user_unique',
  })
  userUnique!: string;

  @Column({
    name: 'username',
    type: 'varchar',
  })
  user!: string;
}