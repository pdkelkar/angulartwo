import { Component } from '@angular/core';

@Component({
    selector: 'subscription-form',
    templateUrl: '../app/subscription-form/subscription-form.component.html'
})
export class SubscriptionFormComponent {

    isTitleClicked:boolean = false;

    titleClicked(){
        this.isTitleClicked = !this.isTitleClicked;
    }

}