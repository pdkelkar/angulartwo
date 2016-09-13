import { Component, Input } from '@angular/core';

import { CourseComponent } from './course/index';
import { AuthorComponent } from './author/index';
import { StarComponent } from './star/index';
//import { HeartComponent } from './heart/index';
import { VoterComponent } from './voter/index';
import { TweetComponent } from './tweet/index';
import { ZippyComponent } from './zippy/index';

@Component({
  selector: 'my-app',
  template: `
  <h1>Angular 2 App</h1>
  <hr>
  <!-- <course></course>
  <author></author>
  <twinkle [is-favourite]="post.favouriteValue"  (starHasChanged)="onStarChange($event)"></twinkle>
  <voter></voter>
  <crush></crush>  
  <tweet></tweet>-->
  <zippy title="Who can see my stuff ?"> 
    This content is for who can see my stuff
  </zippy>

  <zippy title="Who can contact me ?">
    This content is for who can contact me
  </zippy>
  
  `
  
})
export class AppComponent { 

 post = {
    title: 'Some Title',
    favouriteValue: true
  }

  onStarChange($event){
    console.log($event);
  }

}