import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class User {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @PrimaryColumn()
  userId: string;

  @Column()
  name: string;

  @Column()
  password: string;
}