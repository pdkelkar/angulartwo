import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { UserProfile } from '../model/user-profile.model';

import { Observable } from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';

// Statics
import 'rxjs/add/observable/throw';

@Injectable()
export class UserProfileService{

    constructor(private _http:Http){ }

    private _user = 'octocat';
    private _gitUserProfileUrl:string = 'https://api.github.com/users/'+this._user;
    private _gitFollowersUrl:string = 'https://api.github.com/users/'+this._user+'/followers';
    private _userProfile:UserProfile = {};
    private _followers:UserProfile[] = [];
   
   getGitProfile(){
       var obs1:Observable<UserProfile> = this.getUserProfile();
       var obs2:Observable<UserProfile[]> = this.getFollowers();

       return Observable.forkJoin(obs1,obs2)
                        .delay(1000); 

   }

    getUserProfile():Observable<UserProfile>{
        console.log('getUserProfile() - entry');
        return this._http.get(this._gitUserProfileUrl)
                   .map(this.extractData)  
                   .catch(this.handleError);                
         
    }

    getFollowers() : Observable<UserProfile[]> {
        console.log('getFollowers() - entry');
        return this._http.get(this._gitFollowersUrl)
                   .map(this.extractData)  
                   .catch(this.handleError)
                //   .subscribe(userProfile => {
                //       this._userProfile = userProfile;
                //       this._gitAvatarUrl = this._userProfile.avatar_url;
                //     });
         
    }

   private extractData(res:Response){
        let body = res.json();         
        return body || {};
    }

    private handleError(error:any){
        let errMsg = 'Server error';
        console.log(errMsg); 
        return Observable.throw(errMsg);
    }

}