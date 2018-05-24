import { Config } from './interface/config.interface';
import { LolApi } from './lib/lol-api';

export class Warwick extends LolApi {
    constructor(config: Config) {
       super(config);
    }
}