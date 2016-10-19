import { Component, Input, OnInit } from '@angular/core';

// import { CourseComponent } from './course/index';
// import { AuthorComponent } from './author/index';
// import { StarComponent } from './star/index';
// //import { HeartComponent } from './heart/index';
// import { VoterComponent } from './voter/index';
// import { TweetComponent } from './tweet/index';
// import { ZippyComponent } from './zippy/index';
// import { ContactFormComponent } from './contact-form/index';
// import { SubscriptionFormComponent } from './subscription-form/index';
// import { PasswordChangeComponent } from './password-change/index';
// import { PeopleComponent } from './people/index';
// import { UserProfileComponent } from './user-profile/index';
// import { CrisisListComponent, HeroListComponent } from './my-router/index';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { Observable } from 'rxjs/Rx';

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
  <tweet></tweet>
  <zippy title="Who can see my stuff ?"> 
    This content is for who can see my stuff
  </zippy>

  <zippy title="Who can contact me ?">
    This content is for who can contact me
  </zippy>
  <contact-form></contact-form> 
  <subscription-form></subscription-form> 
  <password-change></password-change>
  <people></people>
  <gituser></gituser>-->
  

  <div class="w3-container">     
    <a class="w3-btn w3-light-grey w3-round w3-text-grey" routerLink="/" routerLinkActive="active">Crisis Area</a>
    <a class="w3-btn w3-light-grey w3-round w3-text-grey" routerLink="/heroes" routerLinkActive="active">Heroes Area</a>
  </div>

 <router-outlet></router-outlet>
  
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

//   searchForm:FormGroup;

//   constructor(private fb: FormBuilder){
//     this.searchForm = this.fb.group({
//       'search': ['']
//     });
//   }

//   ngOnInit(){
//     this.searchArtist();
    
//   }

//  searchArtist(){
   
//    this.searchForm.get('search')
//        .valueChanges      
//        .subscribe(data => console.log(data));
//  }

// foo(){
//    var obs1 = Observable.from([1,2,3,4,5,6,7,8,9,10]);
//    // obs1.subscribe(num => console.log(num));
//    obs1.filter(num => num%2==0)       
//        .subscribe(num => console.log(num)); 
// }
  
 
}