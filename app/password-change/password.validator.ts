import { FormControl } from '@angular/forms';

export class PasswordValidator{

    static checkPasswordLength(control:FormControl){        
        if(control.value.length < 5) {
            return {checkPasswordLength : true};
        }       
        else{
            return null; 
        }
           
    }

}