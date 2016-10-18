import { Component,OnInit } from '@angular/core';

import { Crisis, CrisisListService } from '../index';
//import { CrisisListService } from '../service/crisis-list.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/findIndex';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'crisis-list',
    template: `
       <div class="row">
            <div class = "col-md-6"> 
                    <h4> Crisis List Component </h4>
                    <div *ngFor="let cri of _crisis">
                        {{cri.id}} {{cri.name}}

                    </div>                   
            </div>
       </div>
    `
})
export class CrisisListComponent {

    private _crisis:Crisis[] = [];
    private errorMessage:any;

    constructor(private _crisisSvc:CrisisListService){}

    ngOnInit(){
        this.getCrisis();
    }

    private getCrisis(){
        return this._crisisSvc.getCrisis()
                              .subscribe(crisis => this._crisis = crisis,
                                         error =>  this.errorMessage = <any>error
                               );             
    }
}