import { Country } from './country';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries;
}

interface TermCountries {
  term: string;
  countries: Country[];
}

interface RegionCountries {
  term?: Region | string;
  countries: Country[];
}
