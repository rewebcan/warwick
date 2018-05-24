import { Config } from '../interface/config.interface';
import { Request } from './request';
import { sprintf } from 'sprintf-js';
import { Urls } from '../enum/urls.enum';
export class LolApi extends Request {
    private _config: Config;
    private _regionKey: string = 'tr1';
    private _summonerName: string = '';
    private _version = 'v3';
    private _summonerId: number = 0;
    private _summonerNick: string = '';
    private _accountId: number = 0;
    constructor(config: Config) {
        super(config);
        this._config = config;
    }
    get baseUrl() {
        return `https://${this._regionKey}.api.riotgames.com/lol`;
    }
    get version() {
        return this._version;
    }
    get accountId() {
        return this._accountId;
    }
    public region(regionKey: string) {
        this._regionKey = regionKey;
        return this;
    }
    public summoner(summonerId: number) {
        this._summonerId = summonerId;
        return this;
    }
    public account(accountId: number) {
        this._accountId = accountId;
        return this;
    }
    public nick(summonerNick: string): any {
        this._summonerNick = summonerNick;
        return this;
    }

    public matches(callback?: Function) {
        const url = sprintf(Urls.MATCH, this.baseUrl, this.version, this.accountId);
        if (callback) {
            return this.get(url)
                .then(response => callback(response))
                .catch(error => callback(error));
        }
        return this.get(url);
    }
}