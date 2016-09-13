import { Component } from '@angular/core';
import { HeartComponent } from '../heart/index';
import { TweetService } from './tweet.service';
import { TweetModel } from './tweet.model';
import { SummaryPipe } from '../custompipe/summary.pipe';

@Component({
    selector: 'tweet',
    template: `
    <div class="media" *ngFor="let tweet of tweets; let i=index">
        <div class="media-left">
            <a href="#">
            <img class="media-object" src={{imgURL+i}} alt="Tweet">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{tweet.tweetName}}  {{tweet.tweetHandle}} </h4>  
            {{tweet.tweetMessage | summary:150}} 
            <div> <crush [crushValue]="tweet.tweetNum"></crush></div>
        </div>
        
    </div>
    
    `,
    providers: [TweetService],
    styles: [`
        .unhighlighted{
             color: #D3D3D3
        }
    `
    ],
   viewProviders: [SummaryPipe]
    
})
export class TweetComponent{

    imgURL: string = 'http://lorempixel.com/100/100/people?';

    tweets:TweetModel[];

    constructor(tweetService:TweetService){

        this.tweets = tweetService.getTweets();
    }

}