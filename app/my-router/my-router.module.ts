import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrisisListComponent} from './index';

@NgModule({
imports:[
   RouterModule.forRoot([
      { path: 'crisis-center', component: CrisisListComponent }      
    ])
],
// declarations: [   
//     HeroListComponent,
//     CrisisListComponent
//   ],
  exports: [RouterModule]

})
export class MyRouterModule{

}