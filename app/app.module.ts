import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/index';
import { AuthorComponent } from './author/index';
import { StarComponent } from './star/index';
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, CourseComponent, AuthorComponent, StarComponent, AutoGrowDirective],
  bootstrap: [AppComponent]  
})
export class AppModule { }