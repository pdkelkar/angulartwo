import { Component } from '@angular/core';

@Component({
    selector: 'crush',
    template: `
    <hr>
       Likes:  <i class="glyphicon" 
                  [class.glyphicon-heart-empty]="!isClicked"  
                  [class.glyphicon-heart]="isClicked"   
                  (click)="heartClicked()"></i> {{crushValue}}
    `,
    styles: [`
        .glyphicon-heart:{
            color: pink
        },
        .glyphicon-heart-empty{
            color: #ccc
        }
    `]
})
export class HeartComponent{

    isClicked:boolean = false;

    crushValue: number = 10;

    heartClicked(){
        console.log(this.isClicked);
        this.isClicked = !this.isClicked;

        if(this.isClicked){
            this.crushValue = this.crushValue+1;
        }else{
            this.crushValue = this.crushValue-1;
        }
        
    }

}