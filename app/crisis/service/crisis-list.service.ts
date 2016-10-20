import { Injectable } from '@angular/core';
import { Crisis } from '../index';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
 import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/find';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CrisisListService{

    private _crisisListURL:string = 'https://apimint.com:443/mock/FOO/sankat';
    private _crisis:Crisis = {};

    constructor(private _http:Http){ }

    public getCrisis():Observable<Crisis[]>{
           
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('x-mock-access','c436fa311f9cf522a7329d31fd7273');

        let options = new RequestOptions({ headers: headers });

        return  this._http.get(this._crisisListURL, options)
                          .map(this.extractData)
                          .catch(this.handleError) ; 
    }

    private extractData(res:Response){
        console.log("Crisis List Response json: "+ JSON.stringify(res.json()));  
        return  res.json();
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log('Error parsing response: '+error.message); // log to console instead
        return Observable.throw(error.message);
    }

   public getCrisisDetails(id:number):Observable<Crisis>{

       return this.getCrisis()
                  .map(crises => crises.find(crisis => crisis.id == id));    
                         
   }

}