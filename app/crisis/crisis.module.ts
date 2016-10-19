import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CrisisCenterComponent, CrisisCenterHomeComponent, CrisisListComponent, CrisisDetailsComponent } from './index';
import { CrisisRoutingModule } from './index';
import { CrisisListService } from './index';


@NgModule({
    imports: [BrowserModule, HttpModule, CrisisRoutingModule],
    declarations: [CrisisCenterComponent, CrisisCenterHomeComponent, CrisisListComponent, CrisisDetailsComponent],
    providers: [CrisisListService]

})
export class CrisisModule{

}
