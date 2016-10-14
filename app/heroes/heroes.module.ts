import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HeroListComponent, HeroDetailComponent } from './index'
import { HeroListService } from './index';
import { HeroesRoutingModule } from './index';

@NgModule({
    imports: [BrowserModule, HttpModule, HeroesRoutingModule],
    declarations: [HeroListComponent, HeroDetailComponent],
    providers: [HeroListService]
    
})
export class HeroesModule{

}