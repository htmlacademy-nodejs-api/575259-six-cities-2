import { AmenityEnum } from '../constants/index.js';
import { ValueOf } from './common.js';

export type Amenity = ValueOf<typeof AmenityEnum>;
