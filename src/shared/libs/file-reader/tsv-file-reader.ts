import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { parseBoolean } from '../../helpers/index.js';
import { Offer, OfferType } from '../../types/offer.js';
import { UserType } from '../../types/user.js';
import { Amenity } from '../../types/amenity.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, 'utf-8');
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([
        title,
        description,
        createdAt,
        city,
        previewImg,
        images,
        isPremium,
        isFavorite,
        rating,
        type,
        roomsCount,
        guestsCount,
        price,
        amenities,
        commentsCount,
        latitude,
        longitude,
        userName,
        email,
        avatar,
        password,
        userType
      ]) => ({
        title,
        description,
        createdAt,
        city,
        previewImg,
        images: images.split('/'),
        isPremium: parseBoolean(isPremium),
        isFavorite: parseBoolean(isFavorite),
        rating: Number(rating),
        type: type as OfferType,
        roomsCount: Number(roomsCount),
        guestsCount: Number(guestsCount),
        price: Number(price),
        amenities: amenities.split('/') as Amenity[],
        commentsCount: Number(commentsCount),
        coordinate: { latitude: Number(latitude), longitude: Number(longitude) },
        author: { name: userName.split('/').join(' '), email, avatar, password, type: userType as UserType },
      }));
  }
}
