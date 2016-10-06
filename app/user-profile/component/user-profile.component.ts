import { Component,OnInit } from '@angular/core';
import { UserProfileService } from '../service/user-profile.service';
import { UserProfile } from '../model/user-profile.model';

@Component({
    selector:'gituser',
    template:`  
    <div *ngIf="_isLoading">
        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
    </div> 

    <div *ngIf="!_isLoading">
            <div>
            <h3>@{{_userProfile.login}} </h3>
            <img src="{{_userProfile.avatar_url}}" alt="Avatar image" class="avatar">    
            </div> <br>
            <h4>Followers</h4>
            
            <div class="media" *ngFor="let follower of _followers">
                    <div class="media-left">
                        <a href="#">
                        <img class="media-object avatar" src="{{follower.avatar_url}}" alt="follower.login">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{follower.login}}</h4>               
                    </div>
            </div>
    </div>
    `,
    providers: [UserProfileService],
    styles:[`
            .avatar {
                width:100;
                height:100;
                border-­radius:100%;
        }  
    `]

})
export class UserProfileComponent implements OnInit{

    private _userProfile:UserProfile = {};
    private _followers:UserProfile[] = [];
    private _isLoading:boolean = true;

    constructor(private _userProfileSvc:UserProfileService){ }

    ngOnInit(){
        //this.getUserProfile();
        //this.getFollowers();
        this.getGitProfile();
    }   
    // private getUserProfile(){
    //     this._userProfileSvc.getUserProfile()
    //                         .subscribe(userProfile => this._userProfile = userProfile);
    // }

    // private getFollowers(){
    //     this._userProfileSvc.getFollowers()
    //                         .subscribe(followers => this._followers = followers);
    // }

    private getGitProfile(){
        this._userProfileSvc.getGitProfile()
                            .subscribe(joined => {
                                this._isLoading = false;
                                this._userProfile = joined[0],
                                this._followers = joined[1]
                            });
    }

}