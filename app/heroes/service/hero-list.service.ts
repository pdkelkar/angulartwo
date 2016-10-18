import { Injectable } from '@angular/core';
import { Hero } from '../index';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroListService {

    private _heroesURL:string = 'https://apimint.com:443/mock/FOO/heroes';

    constructor(private _http:Http){ }                               

    public getHeroes():Observable<Hero[]> {

        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('x-mock-access','c436fa311f9cf522a7329d31fd7273');

        let options = new RequestOptions({ headers: headers });


        return this._http.get(this._heroesURL,options)
                   .map(this._extractData)
                   .catch(this._handleError);
  
    }

    private _extractData(res:Response){
        console.log("Heroes List Response json: "+ JSON.stringify(res.json()));        
        return res.json();
    }

    private _handleError(error:any){        
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log('Error parsing response: '+errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

     public getHero(id:number):Observable<Hero> {

        return this.getHeroes()
                   .map(heroes => heroes.find(hero => hero.id == id));                   
    }
}