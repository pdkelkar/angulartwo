import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroListComponent, HeroDetailComponent } from './index'
import { HeroListService } from './index';
import { HeroesRoutingModule } from './index';

@NgModule({
    imports: [BrowserModule, HeroesRoutingModule],
    declarations: [HeroListComponent, HeroDetailComponent],
    providers: [HeroListService]
    
})
export class HeroesModule{

}