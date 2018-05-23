import { Config } from '../interface/config.interface';
import { Request } from './request';

export class LolApi extends Request {
   
    private _config: Config;
    private _regionKey: string = 'tr1';
    private _summonerName: string = '';
    private _version = 'v3';
    private _summonerId: number = 0;
    private _summonerNick: string = '';
    constructor(config: Config) {
        super(config);
        this._config = config;
    }
    get baseUrl() {
        return `https://${this._regionKey}.api.riotgames.com/lol`;
    }
    setRegion (regionKey: string) {
        this._regionKey = regionKey;
        return this;
    }
    setSummonerId (summonerId: number) {
        this._summonerId = summonerId;\
        return this;
    }
    setSummonerNick(summonerNick: string): any {
        this._summonerNick = summonerNick;
        return this;
    }
}