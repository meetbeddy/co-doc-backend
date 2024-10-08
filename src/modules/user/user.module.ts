import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionRegistry } from 'src/common/database/collection.registry';

@Module({
  imports: [MongooseModule.forFeature(CollectionRegistry)],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
