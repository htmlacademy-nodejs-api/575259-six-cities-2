import { OfferTypeEnum } from '../constants/index.js';
import { Amenity } from './amenity.js';
import { Coordinate } from './coordinate.js';
import { ValueOf } from './common.js';
import { User } from './user.js';

export type OfferType = ValueOf<typeof OfferTypeEnum>;

export type Offer = {
  title: string;
  description: string;
  createdAt: string;
  city: string;
  previewImg: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: OfferType;
  roomsCount: number;
  guestsCount: number;
  price: number;
  commentsCount: number;
  coordinate: Coordinate;
  author: User;
  amenities: Amenity[];
};
