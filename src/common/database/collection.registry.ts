import { Document, DocumentSchema } from './collections/document.schema';
import { User, UserSchema } from './collections/user.schema';

export const CollectionRegistry = [
  { name: User.name, schema: UserSchema },
  { name: Document.name, schema: DocumentSchema },
];
