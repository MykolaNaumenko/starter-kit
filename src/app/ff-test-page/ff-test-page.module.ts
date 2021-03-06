import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { FfTestPageRoutingModule } from '@app/ff-test-page/ff-test-page-routing.module';
import { FfTestPageComponent } from '@app/ff-test-page/ff-test-page.component';
import { QuoteService } from '@app/ff-test-page/quote.service';
import { FilterJokesPipe } from '@app/ff-test-page/filterJokes.pipe';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FfTestPageRoutingModule
  ],
  declarations: [
    FfTestPageComponent,
    FilterJokesPipe
  ],
  providers: [
    QuoteService,
    FilterJokesPipe
  ]
})
export class FfTestPageModule { }
