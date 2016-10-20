import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroListComponent, HeroDetailComponent } from '../index';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'heroes', component: HeroListComponent},       
        { path: 'hero/:id', component: HeroDetailComponent}
    ])],
    exports: [RouterModule]

})
export class HeroesRoutingModule{

}