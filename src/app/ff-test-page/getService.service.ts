
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetService {

    url = 'https://api.chucknorris.io/jokes/search?query=';

    constructor(private httpClient: HttpClient) {};

    public getJoke(joke: string) {
        return this.httpClient.get(this.url + joke);
    }
 
}
