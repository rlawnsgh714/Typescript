import { User } from "../enetity/user.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export class AuthRepository extends Repository<User> {}
