import { Config } from './interface/config.interface';
import { LolApi } from './lib/lol-api';

export class Warwick extends LolApi {

    constructor(config: Config) {
       super(config);
    }

    region(regionKey: string) {
        return super.setRegion(regionKey);
    }

    summoner(summoner:any) {

        if (typeof(summoner)==='number') {

            return super.setSummonerId(summoner);

        } else if (typeof(summoner) === 'string') {

            return super.setSummonerNick(summoner);

        } else {

            return Error('');
            
        }
    }

    
}