import { Component } from '@angular/core';

import { CourseComponent } from './course/index';
import { AuthorComponent } from './author/index';

@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  <course></course>
  <author></author>
  `
  
})
export class AppComponent { }