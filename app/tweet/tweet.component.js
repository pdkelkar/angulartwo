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
var tweet_service_1 = require('./tweet.service');
var summary_pipe_1 = require('../custompipe/summary.pipe');
var TweetComponent = (function () {
    function TweetComponent(tweetService) {
        this.imgURL = 'http://lorempixel.com/100/100/people?';
        this.tweets = tweetService.getTweets();
    }
    TweetComponent = __decorate([
        core_1.Component({
            selector: 'tweet',
            template: "\n    <div class=\"media\" *ngFor=\"let tweet of tweets; let i=index\">\n        <div class=\"media-left\">\n            <a href=\"#\">\n            <img class=\"media-object\" src={{imgURL+i}} alt=\"Tweet\">\n            </a>\n        </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{tweet.tweetName}}  {{tweet.tweetHandle}} </h4>  \n            {{tweet.tweetMessage | summary:150}} \n            <div> <crush [crushValue]=\"tweet.tweetNum\"></crush></div>\n        </div>\n        \n    </div>\n    \n    ",
            providers: [tweet_service_1.TweetService],
            styles: ["\n        .unhighlighted{\n             color: #D3D3D3\n        }\n    "
            ],
            viewProviders: [summary_pipe_1.SummaryPipe]
        }), 
        __metadata('design:paramtypes', [tweet_service_1.TweetService])
    ], TweetComponent);
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map