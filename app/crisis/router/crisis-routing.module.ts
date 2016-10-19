import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrisisCenterHomeComponent, CrisisListComponent, CrisisCenterComponent, CrisisDetailsComponent } from '../index';

@NgModule({
    imports: 
    [RouterModule.forChild([
        {
            path: '',
            redirectTo: '/crisis-center',
            pathMatch: 'full'
        },        
        { 
            path:'crisis-center', 
            component: CrisisCenterComponent,
            children: [
                {
                    path:'', 
                    component: CrisisListComponent,
                    children:[
                        {
                            path:':id',
                            component:CrisisDetailsComponent
                        },
                        {
                            path:'',
                            component:CrisisCenterHomeComponent
                        }
                    ] 
                }

            ] 
        },
        ])
        ],
    exports: [RouterModule]

})
export class CrisisRoutingModule{

}