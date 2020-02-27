import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {BarsComponent} from '@components/bars/bars.component';

@NgModule({
  declarations: [
    BarsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BarsComponent
  ],
  providers: [],
})
export class SharedModule {
}
