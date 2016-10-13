import {Injectable } from '@angular/core';
import { Hero } from '../index';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/find';

@Injectable()
export class HeroListService{

    private _heroes: Hero[] = [{id:11, name:'Superman'}, 
                               {id:22, name:'Batman'},
                               {id:33, name:'Spiderman'},
                               {id:44, name:'Ironman'} ];

    public getHeroes():Hero[] {
        return this._heroes;
    }

    public getHero(id:number):Observable<Hero> {

         return Observable.from(this._heroes)
                          .find(hero => hero.id == id)
    }
}