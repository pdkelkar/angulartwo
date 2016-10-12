import { Component } from '@angular/core';


@Component({
    selector: 'voter',
    template: `
        <div style="width:20px">
            <i class="glyphicon glyphicon-menu-up" 
               [class.highlighted]=isMenuUpClicked 
               [class.unhighlighted]=isMenuDownClicked 
               [class.unhighlighted]=isDefaultVoterCount
               (click)="menuUpClicked()">
            </i>

             <span>{{voterCount}}</span>

            <i class="glyphicon glyphicon-menu-down" 
               [class.highlighted]=isMenuDownClicked 
               [class.unhighlighted]=isMenuUpClicked 
               [class.unhighlighted]=isDefaultVoterCount
               (click)="menuDownClicked()">
            </i>
        </div>
    `,
    styles:[`
        .highlighted{
            color: orange
        },

        .unhighlighted{
            color: dark gray
        }    
    `]
})
export class VoterComponent{

    voterCount:number = 10;
    defaultVoterCount: number = 10;

    isMenuUpClicked:boolean = false;
    isMenuDownClicked:boolean = false;
    isDefaultVoterCount = false;

    menuUpClicked(){

        if(!this.isMenuUpClicked ){
            this.voterCount = this.voterCount + 1;
        
            if(this.voterCount == this.defaultVoterCount){
                this.isDefaultVoterCount = true;               
            }else{
                this.isDefaultVoterCount = false; 
            }         
            
            if(!this.isDefaultVoterCount){
                this.isMenuUpClicked = true;
            }           
          this.isMenuDownClicked = false;
        } 
    }

    menuDownClicked(){
   
        if(!this.isMenuDownClicked){
            this.voterCount = this.voterCount - 1;
        
            if(this.voterCount == this.defaultVoterCount){
                this.isDefaultVoterCount = true;               
            }else{
                this.isDefaultVoterCount = false; 
            }

            if(!this.isDefaultVoterCount){
                this.isMenuDownClicked = true;
            }
            this.isMenuUpClicked = false;
        }
    }
}