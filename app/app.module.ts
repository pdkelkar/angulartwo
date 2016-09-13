import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { CourseComponent } from './course/index';
import { AuthorComponent } from './author/index';
import { StarComponent } from './star/index';
import { HeartComponent } from './heart/index';
import { VoterComponent } from './voter/index';
import { TweetComponent } from './tweet/index';
import { ZippyComponent } from './zippy/index';

//Pipes
import { SummaryPipe } from './custompipe/summary.pipe';

//Directives
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, CourseComponent, AuthorComponent, StarComponent, HeartComponent, 
                 VoterComponent, TweetComponent, ZippyComponent, AutoGrowDirective,SummaryPipe],  
  //exports: [SummaryPipe],
  bootstrap: [AppComponent]  
})
export class AppModule { }