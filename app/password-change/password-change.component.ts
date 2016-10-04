import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';	
import { PasswordValidator } from './password.validator';
@Component({
    selector: 'password-change',
    templateUrl: '../app/password-change/password-change.component.html',
    styles: [`
    .form-control {      
        width: 50%  
     } 
    `]
})
export class PasswordChangeComponent {

  form: FormGroup;

  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({
      oldPassword:  ['', Validators.compose([Validators.required])],
      newPassword:['', Validators.compose([Validators.required, PasswordValidator.checkPasswordLength])],
      confirmPassword:  ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(){
      console.log("Submitted");
  }
}