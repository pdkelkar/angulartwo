import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'twinkle',
    template:`
    <hr>
       Twinkle Star:   <i class = "glyphicon" 
                          [class.glyphicon-star-empty]="!isClicked" 
                          [class.glyphicon-star]="isClicked"
                          (click)="starClicked()">
                          </i>
    `,
    styles: [`
        .glyphicon-star{
            color: orange
        }    
    `]
})
export class StarComponent{
    //isClicked:boolean = false;
    @Input('is-favourite') isClicked:boolean;
 
    @Output('starHasChanged') starChange = new EventEmitter();

    starClicked(){
        this.isClicked = !this.isClicked;
        this.starChange.emit( {clickValue : this.isClicked } );
    }
}