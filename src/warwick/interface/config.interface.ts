import { RegionType } from '../enum/region.enum';
export interface Config {
    apiKey: string;
    region?: RegionType;
}