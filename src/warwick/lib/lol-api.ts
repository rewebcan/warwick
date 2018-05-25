import { Config } from '../interface/config.interface';
import { sprintf } from 'sprintf-js';
import { Urls } from '../enum/urls.enum';
import * as request from 'request-promise';
import { MatchFilter } from '../interface/match-filter.interface';
export class LolApi {
    private _config: Config;
    private _regionKey: string = 'tr1';
    private _summonerName: string;
    private _version = 'v3';
    private _summonerId: number = 0;
    private _summonerNick: string = '';
    private _accountId: number = 0;
    private _request: any;
    constructor(config: Config) {
        this._config = config;
        this._request = request.defaults({
                json: true,
                headers: { 
                    'X-Riot-Token': config.apiKey 
                }
            });
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

    public matches(): Promise<any> {
        const url = sprintf(Urls.MATCH, this.baseUrl, this.version, this.accountId);
        return this._request.get(url);
    }

    public matchesFiltered(filter: MatchFilter): Promise<any> {
        const url = sprintf(Urls.MATCH, this.baseUrl, this.version, this.accountId);
        return this._request.get({url: url, qs: filter});
    }

    public match(matchId: number): Promise<any> {
        const url = sprintf(Urls.MATCH, this.baseUrl, this.version, matchId);
        return this._request.get(url)
    }

    public timeline(matchId: number): Promise<any> {
        const url = sprintf(Urls.TIMELINE, this.baseUrl, this.version, matchId);
        return this._request.get(url)
    }

    
}