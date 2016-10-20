import { Component,OnInit } from '@angular/core';
import { Crisis, CrisisListService } from '../index';

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
            <div class = "col-md-3">
                <h4>Crisis List Component</h4>
                     <table class="table table-hover">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                       
                        <tr *ngFor="let cri of _crisis">
                            <td>{{cri.id}}</td>
                            <td><a [routerLink]="[cri.id]">{{ cri.name }}</a></td>
                        </tr>
                     
                    </table>                   
            </div>
       </div>
       <router-outlet></router-outlet>
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