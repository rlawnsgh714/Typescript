import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entites';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}