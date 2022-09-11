import { InferSchemaType } from 'mongoose';
import { userSchema } from '../models';

export type UserV1 = InferSchemaType<typeof userSchema>;
