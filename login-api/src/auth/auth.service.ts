import { 
    Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './enetity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository
  ) {
    this.userRepository = userRepository;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ userId: id });
  }

  async register(user: User): Promise<User> {
    if(!user.name || !user.password || !user.userId){
      return Object.assign({
        statusCode: 401,
        statusMsg: `입력되지 않은 항목이 있습니다.`,
      });
    }
    return await this.userRepository.save(user);
  }

  async login(user:User):Promise<User>{
    const logindata = await this.userRepository.findOne({ 
      where : {
        name : user.name
      }
     });
    console.log(user.name);
    console.log(logindata);
    if(logindata === undefined){
      return Object.assign({
        statusCode: 401,
        statusMsg: `이 이름을 가진 사람이 없습니다.`,
      });
    }
    if(logindata.name === user.name){
      return logindata;
    }
  }
  
  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete({ userId: id });
  }
}