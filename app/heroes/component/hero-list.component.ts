import { Component,OnInit } from '@angular/core';
import { Hero, HeroListService } from '../index';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/findIndex';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
    selector:'hero-list',
    template:`
        <h3>HEROES</h3>
       <div class="row">
            <div class="col-md-6"> 
                <div *ngFor="let hero of _heroes"> 
                <p></p>
                <ul class="w3-navbar w3-border w3-round w3-light-grey">
                        <li class="w3-blue-grey">{{hero.id}}</li>
                        <li [ngStyle]="{'cursor':'pointer'}"  (click)="onSelected(hero)">{{hero.name}}</li>
                </ul>
                </div>
            </div>
       </div>         
    `
})
export class HeroListComponent implements OnInit{

   private _heroes:Hero[]=[]; 
   private errorMessage:any;
   private _selectedId:number;
   private _selectedName:string; 
   constructor(private _route: ActivatedRoute, private _router:Router, private _heroListSvc:HeroListService){}

   ngOnInit(){
       this.getHeroes();
   }

   private getHeroes() {
       return this._heroListSvc.getHeroes()
                  .subscribe(heroes => {
                               this._heroes = heroes;
                               this._route.params.forEach((params:Params) => {
                                   this._selectedId = +params['heroId'];
                                   this._selectedName = params['heroName'];

                                   let hero = Observable.from(this._heroes)
                                             .filter(uhero => uhero.id == this._selectedId)
                                             .subscribe(hero => {                                                  
                                                  let ind = this._heroes.indexOf(hero);
                                                  hero.name = this._selectedName;
                                                  this._heroes[ind] = hero;
                                                });
                                   
                                })
                             },
                             error =>  this.errorMessage = <any>error);
   } 

   public onSelected(hero:Hero){
       this._router.navigate(['/hero',hero.id]);
   }
}