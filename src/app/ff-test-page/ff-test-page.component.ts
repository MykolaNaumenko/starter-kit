import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuoteService } from '@app/ff-test-page/quote.service';
import { GetService } from '@app/ff-test-page/getService.service';

@Component({
  selector: 'ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss'],
  providers: [GetService],
})
export class FfTestPageComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  jokes: any;
  placeHolder = `jokes`;
  inputValue: any;
  constructor(
    private quoteService: QuoteService,
    private getService: GetService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

  public getJokes(value: any) {
    this.getService.getJoke(value)
      .subscribe((jokes) => {
        this.jokes = jokes['result'];
      });
  }
}
