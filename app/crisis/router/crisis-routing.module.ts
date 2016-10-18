import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrisisListComponent } from '../index';

@NgModule({
    imports: [RouterModule.forChild([
        { path:'crisis-center', component: CrisisListComponent },
        { path:'', component: CrisisListComponent }        
        ])],
    exports: [RouterModule]

})
export class CrisisRoutingModule{

}