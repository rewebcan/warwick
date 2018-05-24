import * as request from 'request-promise';

export class Request {
    private _request: any;
    constructor(baseConfig: any) {
        const headers = baseConfig.headers ? baseConfig.headers : {};
        this._request = request.defaults({
            headers: {
                "X-Riot-Token": baseConfig.apiKey,
                ...headers
            }
        })
    }
    
    protected get(endpoint: string): Promise<any> {
        return this._request.get(endpoint);
    }
}