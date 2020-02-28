import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {BarsComponent} from '@shared/components/bars/bars.component';
import {SpeedSelectorComponent} from '@shared/components/speed-selector/speed-selector.component';

@NgModule({
  declarations: [
    BarsComponent,
    SpeedSelectorComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    BarsComponent,
    SpeedSelectorComponent
  ],
  providers: [],
})
export class SharedModule {
}
