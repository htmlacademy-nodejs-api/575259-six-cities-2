import { User } from './user.js';

export type Comment = {
  text: string;
  rating: number;
  author: User;
  createdAt: string;
};
