
export class TweetModel{

    constructor(tweetName:string, tweetHandle:string, tweetMessage:string,tweetNum:number){
        this.tweetName = tweetName;
        this.tweetHandle = tweetHandle;
        this.tweetMessage = tweetMessage;
        this.tweetNum = tweetNum;
    }

    tweetName:string;
    tweetHandle:string;
    tweetMessage:string;
    tweetNum:number;

}