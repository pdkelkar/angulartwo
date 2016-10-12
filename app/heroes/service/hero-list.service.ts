import {Injectable } from '@angular/core';
import { Hero } from '../index';

@Injectable()
export class HeroListService{

    private _heroes: Hero[] = [{id:11, name:'One'}, 
                               {id:22, name:'Two'},
                               {id:33, name:'Three'},
                               {id:44, name:'Four'} ];

    public getHeroes():Hero[] {
        return this._heroes;
    }                           
}