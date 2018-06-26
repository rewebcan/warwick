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
    /**
     * 
     * @param regionKey 
     */
    public region(regionKey: string) {
        this._regionKey = regionKey;
        return this;
    }
    /**
     * 
     * @param summonerId 
     */
    public summoner(summonerId: number) {
        this._summonerId = summonerId;
        return this;
    }
    /**
     * 
     * @param accountId 
     */
    public account(accountId: number) {
        this._accountId = accountId;
        return this;
    }
    /**
     * 
     * @param summonerNick 
     */
    public nick(summonerNick: string): any {
        this._summonerNick = summonerNick;
        return this;
    }

    /**
     * @description Last matches of a user with the given accountId
     * @returns Promise<any> 
     * @param accountId (optional)
     */
    public matches(accountId?: number): Promise<any> {
        const url = sprintf(Urls.MATCH, this.baseUrl, this.version, accountId ? accountId : this.accountId);
        return this._request.get(url);
    }

    /**
     * @description Filtered matches of a user with the given accountId
     * @returns Promise<any> 
     * @param filter 
     */
    public matchesFiltered(filter: MatchFilter): Promise<any> {
        const url = sprintf(Urls.MATCH, this.baseUrl, this.version, this.accountId);
        return this._request.get({ url: url, qs: filter });
    }

    /**
     * @description Single match detail with given matchId
     * @param matchId 
     */
    public match(matchId: number): Promise<any> {
        const url = sprintf(Urls.MATCH, this.baseUrl, this.version, matchId);
        return this._request.get(url)
    }
    /**
     * @description Match timeline with given matchId
     * @param matchId 
     */
    public timeline(matchId: number): Promise<any> {
        const url = sprintf(Urls.TIMELINE, this.baseUrl, this.version, matchId);
        return this._request.get(url)
    }

    /**
     * @description Summoner info.
     * @param accountId 
     */
    public getSummonerByAccountId(accountId: number) {
        const url = sprintf(Urls.SUMMONER_BY_ACCOUT_ID, this.baseUrl, this.version, accountId);
        return this._request.get(url);
    }

    /**
     * @description Summoner info.
     * @param name 
     */
    public getSummonerByName(name: string) {
        name = decodeURIComponent(name);
        const url = sprintf(Urls.SUMMONER_BY_NAME, this.baseUrl, this.version, name);
        return this._request.get(url);
    }

    /**
     * @description Positions of a summoner on any league.
     * @param summonerName 
     */
    public summonerPositions(summonerName: string) {
        const url = sprintf(Urls.POSITIONS, this.baseUrl, this.version, summonerName);
        return this._request.get(url);
    }

    /**
     * @description Get all champion mastery entries sorted by number of champion points descending.
     * @param summonerId 
     */
    public championMastery(summonerId: number) {
        const url = sprintf(Urls.CHAMPION_MASTERY, this.baseUrl, this.version, summonerId);
        return this._request.get(url);
    }

    /**
     * @description Get a champion mastery by player ID and champion ID.
     * @param summonerId
     * @param championId
     */
    public championMasteryByChampion(summonerId: number, championId: number) {
        const url = sprintf(Urls.CHAMPION_MASTERY_BY_CHAMPION, this.baseUrl, this.version, summonerId, championId);
        return this._request.get(url);
    }


    /**
     * Get a player's total champion mastery score, which is the sum of individual champion mastery levels.
     * @param summonerId 
     */
    public championScores(summonerId: number) {
        const url = sprintf(Urls.CHAMPION_SCORES, this.baseUrl, this.version, summonerId);
        return this._request.get(url);
    }
}