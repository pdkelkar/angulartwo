import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroListComponent, HeroDetailComponent } from '../index';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'heroes', component: HeroListComponent},
        { path: 'hero-detail', component: HeroDetailComponent},
        { path: 'hero/:id', component: HeroDetailComponent},
        { path: '', component: HeroListComponent}
    ])],
    exports: [RouterModule]

})
export class HeroesRoutingModule{

}