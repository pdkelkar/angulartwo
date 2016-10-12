import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroListComponent } from '../index';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'heroes', component: HeroListComponent},
        { path: '', component: HeroListComponent}
    ])],
    exports: [RouterModule]

})
export class HeroesRoutingModule{

}