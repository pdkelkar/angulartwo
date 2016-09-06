import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { AutoGrowDirective } from '../auto-grow.directive';

@Component({
  selector: 'course',
  template: `
  <hr>
  <h2>Course</h2>
    {{title}}
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>
  `,
  providers: [CourseService],
  viewProviders: [AutoGrowDirective]
})

export class CourseComponent {

    title: string = "This is the course list";

    courses: string[];

    constructor(courseService:CourseService){
        this.courses = courseService.getCourses();
    }
}