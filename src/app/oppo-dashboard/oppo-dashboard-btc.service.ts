import { BtcTrades } from './models/btctrades.interface';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const TRADES_API: string = './api/passengers';
@Injectable()
export class OportunityDashboardService {

    constructor (private http: Http) {
        console.log(this.http);
    }

    // getPassenger(id: number): Observable<Passenger> {
    //   return this.http
    //     .get(`${PASSGENGER_API}/${id}`)
    //     .map((response: Response) => { return response.json() })
    //     .catch((error: any) => Observable.throw(error.json()));
    // }
    getBtcTrades () : Observable<BtcTrades []> {
        return  this.http
        .get(TRADES_API)
        .map((response: Response) => {return response.json()})
        .catch((error: any) => Observable.throw(error.json()));
    }
}
