import {NgModule} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {SortingComponent} from './sorting.component';
import {BarsComponent} from '@components/bars/bars.component';
import {SortingRoutingModule} from './sorting-routing.module';
import {QuickSortComponent} from 'app/modules/sorting/quick-sort/quick-sort.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SortingComponent,
    QuickSortComponent,
    BarsComponent,
  ],
  imports: [
    CommonModule,
    SortingRoutingModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [SortingComponent]
})
export class SortingModule {
}
