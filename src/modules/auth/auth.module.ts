import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtConstants } from 'src/common/constants/constants';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionRegistry } from 'src/common/database/collection.registry';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
    MongooseModule.forFeature(CollectionRegistry),
  ],
  providers: [AuthService, JwtStrategy, JwtService, UserService, ConfigService],
  controllers: [AuthController],
})
export class AuthModule {}
