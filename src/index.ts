import { Warwick } from "./warwick/warwick";

const ww = new Warwick({ apiKey: 'RGAPI-1ce8a4a1-dda9-46b5-8106-43c2745d3158' });
ww.region('tr1').account(200653993).matches(
    (matches: any)=> {
        console.log(matches)
    }
)