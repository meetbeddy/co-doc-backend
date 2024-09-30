import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { User } from 'src/common/database/collections/user.schema';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload: JwtPayload = {
      email: user.email,
      sub: String(user._id),
      username: user.username,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async googleLogin(user: User) {
    const payload: JwtPayload = {
      email: user.email,
      sub: String(user._id),
      username: user.username,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async signup(params: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(params.password, 10);
    return this.userService.createUser({
      username: params.username,
      email: params.email,
      password: hashedPassword.toString(),
    });
  }
}
