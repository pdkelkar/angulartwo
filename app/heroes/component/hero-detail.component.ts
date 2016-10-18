import { Component, OnInit } from '@angular/core';
import { Hero, HeroListService } from '../index';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'hero-detail',
    template: `
         <div *ngIf="_isLoaded"> 
                <h3>"{{_hero.name}}"</h3>
                    <div>
                        <div>
                            Id: {{_hero.id}}
                        </div>

                        <div>
                                Name: <input [(ngModel)] = "_hero.name"> 
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary" (click)="goToHeroes()" style="margin-top: 20px; margin-left: 20px;">Back</button>
        </div>
    `
})
export class HeroDetailComponent implements OnInit {

    constructor(private _router:Router, private _route:ActivatedRoute, private _heroSvc:HeroListService){

    }

    ngOnInit(){
        this._route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.getHero(id);
        })
    }

    private getHero(id:number):Hero{
        return this._heroSvc.getHero(id)
                            .subscribe(hero => {
                                this._hero = hero;
                                this._isLoaded = true;    
                            });
    }

    private _hero:Hero = { }

    private _isLoaded:boolean = false;

    private goToHeroes(){
        this._router.navigate(['/heroes', {heroId: this._hero.id, heroName:this._hero.name}]);
    }
}