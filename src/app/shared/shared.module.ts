import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {BarsComponent} from '@components/bars/bars.component';
import { SpeedSelectorComponent } from '@components/speed-selector/speed-selector.component';
import {MatIconModule} from '@angular/material/icon';

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
