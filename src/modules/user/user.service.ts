import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/common/database/collections/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Create a new user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  // Find a user by email
  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  // Find a user by ID
  async findById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  // Find or create a user using Google credentials
  async findOrCreateGoogleUser(googleProfile: any): Promise<User> {
    let user = await this.userModel
      .findOne({ email: googleProfile.email })
      .exec();

    // If the user does not exist, create a new one
    if (!user) {
      user = new this.userModel({
        username: googleProfile.displayName,
        email: googleProfile.email,
        password: null, // No password for Google-authenticated users
        googleId: googleProfile.id, // Store Google ID to check next time
      });
      await user.save();
    }

    return user;
  }
}
