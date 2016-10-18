import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CrisisListComponent } from './index';
import { CrisisRoutingModule } from './index';
import { CrisisListService } from './index';


@NgModule({
    imports: [BrowserModule, HttpModule, CrisisRoutingModule],
    declarations: [CrisisListComponent],
    providers: [CrisisListService]

})
export class CrisisModule{

}
