import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MyRouterModule } from './my-router/index';
import { HeroesModule } from './heroes/index'
//import { RouterModule } from '@angular/router'

//Components
import { AppComponent } from './app.component';
import { CourseComponent } from './course/index';
import { AuthorComponent } from './author/index';
import { StarComponent } from './star/index';
import { HeartComponent } from './heart/index';
import { VoterComponent } from './voter/index';
import { TweetComponent } from './tweet/index';
import { ZippyComponent } from './zippy/index';
import { ContactFormComponent } from './contact-form/index';
import { SubscriptionFormComponent } from './subscription-form/index';
import { PeopleComponent } from './people/index';
import { UserProfileComponent } from './user-profile/index';
//import { PasswordChangeComponent } from './password-change/index';
import { CrisisListComponent} from './my-router/index';
//import { HeroListComponent } from './heroes/index';

//Pipes
import { SummaryPipe } from './custompipe/summary.pipe';

//Directives
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, HeroesModule, MyRouterModule ],  
  declarations: [AppComponent, CourseComponent, AuthorComponent, StarComponent, HeartComponent, VoterComponent, TweetComponent,
                 ZippyComponent, PeopleComponent, UserProfileComponent,  CrisisListComponent, AutoGrowDirective, SummaryPipe],  
  bootstrap: [AppComponent]  
})
export class AppModule { }