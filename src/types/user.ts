import { InferSchemaType } from 'mongoose';
import { userV1Schema, userV2Schema } from '../models';

export type UserV1 = InferSchemaType<typeof userV1Schema>;
export type UserV2 = InferSchemaType<typeof userV2Schema>;
