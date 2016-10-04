import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { People } from '../people/people.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';

@Component({
    selector: 'people',
    template: `
        <div *ngIf="isLoading">
            <h3> Loading users ... </h3>
            <img src="../app/people/img/25.gif">
        </div>    
 
        <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>                
                    <tr *ngFor = "let p of users">
                        <td> {{p.id}} </td>
                        <td> {{p.title}} </td>
                        <td> {{p.body}} </td>
                    </tr>

        </table>       
    `,
    providers: [PeopleService]


})
export class PeopleComponent implements OnInit{

    users : People[] = [];
    errorMessage : string = '';
    isLoading: boolean = true;

    constructor(private peopleSvc: PeopleService){}

    getPeople(){
               this.peopleSvc.getPeople()
                             .subscribe(
                              people => {                                  
                                  this.isLoading = false;
                                  this.users = people },
                              error => this.errorMessage = <any> error                              
                              );  
                                                  
    }
   
    ngOnInit(){       
        this.getPeople();       
    }

}