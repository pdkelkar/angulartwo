import { Component,OnInit } from '@angular/core';
import { Hero, HeroListService } from '../index';

@Component({
    selector:'hero-list',
    template:`
        <h3>HEROES</h3>
       <div *ngFor="let hero of _heroes"> 
       <p></p>
       <ul class="w3-navbar w3-border w3-round w3-light-grey">
            <li><a class="w3-blue-grey" href="#">{{hero.id}}</a></li>
            <li ><a href="#">{{hero.name}}</a></li>
       </ul>
       </div>
    `
})
export class HeroListComponent implements OnInit{

   private _heroes:Hero[]=[]; 
   private errorMessage:any;

   constructor(private _heroListSvc:HeroListService){}

   ngOnInit(){
       this.getHeroes();
   }

   private getHeroes() {
       return this._heroListSvc.getHeroes()
                  .subscribe(heroes => this._heroes = heroes,
                             error =>  this.errorMessage = <any>error);
   } 
}