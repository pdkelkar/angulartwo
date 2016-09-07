import { Component} from '@angular/core';

@Component({
    selector: 'twinkle',
    template:`
    <hr>
       Twinkle Star:   <i class = "glyphicon" 
                          [class.glyphicon-star-empty]="!isClicked" 
                          [class.glyphicon-star]="isClicked"
                          (click)="starClicked()">
                          </i>
    `
})
export class StarComponent{

    isClicked:boolean = false;
 
    starClicked(){
        console.log("star clicked");
        this.isClicked = !this.isClicked;

    }
}