import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
    selector:'author',
    template:`
    <h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="let author of authors">{{ author }}</li>
    </ul>
    `,
    providers: [AuthorService]
})

export class AuthorComponent{
    title:string = 'This is the authors list';

    authors: string[];

    constructor(authorService:AuthorService){
        this.authors = authorService.getAuthors();
    }
    
}