
import { Component, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    template:`
    <div class="panel panel-default" [ngStyle]="{'width': '900px'}">
        <div class="panel-heading">
            {{title}}
            <div [ngStyle]="{'text-align':'right'}">
                <i class="glyphicon" [ngClass] = "{'glyphicon-chevron-down':!isTitleClicked,
                                                   'glyphicon-chevron-up':isTitleClicked}" 
                                                   (click)="titleClicked()"></i>
             </div>
        </div>
        <div class="panel-body" *ngIf="isTitleClicked">
            <ng-content></ng-content>
        </div>
    </div>
    `

})
export class ZippyComponent {

    isTitleClicked:boolean = false;
    @Input() title:string = '';

    titleClicked(){
        this.isTitleClicked = !this.isTitleClicked;
    }

}
