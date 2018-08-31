
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetService {

    url = 'https://api.chucknorris.io/jokes/search?query=';
    alternativeEnding = 'zzz';
  
    constructor(private httpClient: HttpClient) {};

    public getJoke(joke: any) {
        joke = joke || this.alternativeEnding;
        return this.httpClient.get(this.url + joke);
    }
}
