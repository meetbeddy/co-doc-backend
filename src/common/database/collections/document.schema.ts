import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument, Types } from 'mongoose';
import { SchemaJsonInterceptor } from '../collection.interceptor';

@Schema({ timestamps: true, versionKey: false })
export class Document extends MongooseDocument {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: string;

  @Prop([{ type: Types.ObjectId, ref: 'User' }])
  sharedWith: string[];
}

export const DocumentSchema = SchemaFactory.createForClass(Document).set(
  'toJSON',
  SchemaJsonInterceptor,
);
