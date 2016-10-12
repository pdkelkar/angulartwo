import { Component, Input } from '@angular/core';

@Component({
    selector: 'crush',
    template: `

       <i class="glyphicon glyphicon-heart" 
                  [class.unhighlighted]="!isClicked"  
                  [class.highlighted]="isClicked"   
                  (click)="heartClicked()"></i> {{crushValue}}
    `,
    styles: [`
        
        .highlighted{
             color: deeppink
        },
        .unhighlighted{
             color: #D3D3D3
        }
    `]
})
export class HeartComponent{

    isClicked:boolean = false;

    @Input() crushValue: number = 10;

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