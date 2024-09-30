import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DocumentModule } from './modules/document/document.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionRegistry } from './common/database/collection.registry';
import { VersionControlController } from './modules/version-control/version-control.controller';
import { VersionControlService } from './modules/version-control/version-control.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/co-doc'),
    MongooseModule.forFeature(CollectionRegistry),
    AuthModule,
    DocumentModule,
    UserModule,
  ],
  controllers: [AppController, VersionControlController],
  providers: [AppService, VersionControlService],
})
export class AppModule {}
