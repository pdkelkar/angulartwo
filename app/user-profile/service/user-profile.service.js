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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/forkJoin');
// Statics
require('rxjs/add/observable/throw');
var UserProfileService = (function () {
    function UserProfileService(_http) {
        this._http = _http;
        this._user = 'octocat';
        this._gitUserProfileUrl = 'https://api.github.com/users/' + this._user;
        this._gitFollowersUrl = 'https://api.github.com/users/' + this._user + '/followers';
        this._userProfile = {};
        this._followers = [];
    }
    UserProfileService.prototype.getGitProfile = function () {
        var obs1 = this.getUserProfile();
        var obs2 = this.getFollowers();
        return Observable_1.Observable.forkJoin(obs1, obs2)
            .delay(1000);
    };
    UserProfileService.prototype.getUserProfile = function () {
        console.log('getUserProfile() - entry');
        return this._http.get(this._gitUserProfileUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProfileService.prototype.getFollowers = function () {
        console.log('getFollowers() - entry');
        return this._http.get(this._gitFollowersUrl)
            .map(this.extractData)
            .catch(this.handleError);
        //   .subscribe(userProfile => {
        //       this._userProfile = userProfile;
        //       this._gitAvatarUrl = this._userProfile.avatar_url;
        //     });
    };
    UserProfileService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserProfileService.prototype.handleError = function (error) {
        var errMsg = 'Server error';
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    UserProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserProfileService);
    return UserProfileService;
}());
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=user-profile.service.js.map