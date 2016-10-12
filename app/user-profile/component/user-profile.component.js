"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_profile_service_1 = require('../service/user-profile.service');
var UserProfileComponent = (function () {
    function UserProfileComponent(_userProfileSvc) {
        this._userProfileSvc = _userProfileSvc;
        this._userProfile = {};
        this._followers = [];
        this._isLoading = true;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        //this.getUserProfile();
        //this.getFollowers();
        this.getGitProfile();
    };
    // private getUserProfile(){
    //     this._userProfileSvc.getUserProfile()
    //                         .subscribe(userProfile => this._userProfile = userProfile);
    // }
    // private getFollowers(){
    //     this._userProfileSvc.getFollowers()
    //                         .subscribe(followers => this._followers = followers);
    // }
    UserProfileComponent.prototype.getGitProfile = function () {
        var _this = this;
        this._userProfileSvc.getGitProfile()
            .subscribe(function (joined) {
            _this._userProfile = joined[0],
                _this._followers = joined[1];
        }, null, function () {
            _this._isLoading = false;
        });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'gituser',
            template: "  \n    <div *ngIf=\"_isLoading\">\n        <i class=\"fa fa-refresh fa-spin fa-3x fa-fw\"></i>\n        <span class=\"sr-only\">Loading...</span>\n    </div> \n\n    <div *ngIf=\"!_isLoading\">\n            <div>\n            <h3>@{{_userProfile.login}} </h3>\n            <img src=\"{{_userProfile.avatar_url}}\" alt=\"Avatar image\" class=\"avatar\">    \n            </div> <br>\n            <h4>Followers</h4>\n            \n            <div class=\"media\" *ngFor=\"let follower of _followers\">\n                    <div class=\"media-left\">\n                        <a href=\"#\">\n                        <img class=\"media-object avatar\" src=\"{{follower.avatar_url}}\" alt=\"follower.login\">\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\">{{follower.login}}</h4>               \n                    </div>\n            </div>\n    </div>\n    ",
            providers: [user_profile_service_1.UserProfileService],
            styles: ["\n            .avatar {\n                width:100;\n                height:100;\n                border-\u00ADradius:100%;\n        }  \n    "]
        }), 
        __metadata('design:paramtypes', [user_profile_service_1.UserProfileService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map