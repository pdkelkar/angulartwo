import { Component } from '@angular/core';

import { CourseComponent } from './course/index';
import { AuthorComponent } from './author/index';
import { StarComponent } from './star/index';
import { HeartComponent } from './heart/index';
import { VoterComponent } from './voter/index';

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  <hr>
  <!-- <course></course>
  <author></author>
  <twinkle [is-favourite]="post.favouriteValue"  (starHasChanged)="onStarChange($event)"></twinkle>
  <crush></crush> -->
  <voter></voter>
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