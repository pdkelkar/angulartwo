import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'contact-form',
    templateUrl: '../app/contact-form/contact-form.component.html'
    
       
})
export class ContactFormComponent{

   onSubmit(form:NgForm){
       console.log(form);
   }

}