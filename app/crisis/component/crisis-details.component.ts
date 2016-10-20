import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CrisisListService } from '../index';
import { Crisis } from '../index';

@Component({

    template: `
        <p>Welcome to the Crisis Details for Id: {{_crisis.id}} with name: {{_crisis.name}}</p>
        <a class="w3-btn w3-blue w3-round w3-text-sand" routerLink="/" routerLinkActive="active">Back</a>
    `

})

export class CrisisDetailsComponent implements OnInit{

    private _crisis:Crisis = {};

    constructor(private _crisisListSvc:CrisisListService, private _router:Router, private _route:ActivatedRoute){}

    ngOnInit(){
        this.showCrisis();
    }

    private showCrisis(){
        this._route.params.forEach(params => {
            let id = +params['id'];
            this._crisis.id = id;  

            this._crisisListSvc.getCrisisDetails(id)
                               .subscribe(crisis => this._crisis = crisis)   ;     
        })
    }

}