import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/index';
import { AuthorComponent } from './author/index';
import { StarComponent } from './star/index';
import { HeartComponent } from './heart/index';
import { VoterComponent } from './voter/index';
import { TweetComponent } from './tweet/index';
import { SummaryPipe } from './custompipe/summary.pipe';
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, CourseComponent, AuthorComponent, StarComponent, HeartComponent, VoterComponent, TweetComponent,AutoGrowDirective,SummaryPipe],  
  exports: [SummaryPipe],
  bootstrap: [AppComponent]  
})
export class AppModule { }