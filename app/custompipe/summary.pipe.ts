import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    
    transform(value: string, args: string[]):string {
    let summaryLen = 10;
    console.log("value:" +value);
    console.log("summary length required:" +args);

   
        console.log("inside if");
        summaryLen = parseInt(args[0]);
   
    return value.substr(0, summaryLen);
  }
}