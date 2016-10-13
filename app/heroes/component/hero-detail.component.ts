import { Component } from '@angular/core';
import { Hero, HeroListService } from '../index';
@Component({
    selector: 'hero-detail',
    template: `
        <button class="w3-btn w3-orange" (click)=getHero(33)>Orange</button>

        <h3>"{{_hero.name}}"</h3>
        <div>
            <div>
                Id: {{_hero.id}}
             </div>

             <div>
                    Name: <input value={{_hero.name}}> 
             </div>   

        </div>    
    `
})
export class HeroDetailComponent {

    constructor(private _heroSvc:HeroListService){

    }

    private getHero(id:number):Hero{
        return this._heroSvc.getHero(id)
                            .subscribe(hero => this._hero = hero);
    }

    private _hero:Hero = { }

}