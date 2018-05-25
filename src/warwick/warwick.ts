import { Config } from './interface/config.interface';
import { LolApi } from './lib/lol-api';

export class Warwick extends LolApi {
    [Symbol.toStringTag]: 'Warwick';
    constructor(config: Config) {
        super(config);
    }
}