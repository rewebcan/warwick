import { Config } from './interface/config.interface';
export class Warwick {
    private _config: Config;
    constructor(config: Config) {
        this._config = config;
    }
}