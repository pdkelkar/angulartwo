import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CrisisListComponent } from './index';
import { CrisisRoutingModule } from './index';

@NgModule({
    imports: [BrowserModule, CrisisRoutingModule],
    declarations: [CrisisListComponent]

})
export class CrisisModule{

}
