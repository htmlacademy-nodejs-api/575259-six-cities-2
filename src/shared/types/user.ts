import { UserTypeEnum } from '../constants/index.js';
import { ValueOf } from './common.js';

export type UserType = ValueOf<typeof UserTypeEnum>;

export type User = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  type: UserType;
};
