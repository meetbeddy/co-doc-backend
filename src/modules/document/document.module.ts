import { Module } from '@nestjs/common';
import { DocumentService } from './document/document.service';
import { DocumentController } from './document/document.controller';

@Module({
  providers: [DocumentService],
  controllers: [DocumentController]
})
export class DocumentModule {}
