import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { User } from "src/auth/enetity/user.entity";
export const ormConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456789',
  database: 'practice',
  entities: [User],
  synchronize: false,
};