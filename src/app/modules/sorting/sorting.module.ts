import {NgModule} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {SortingComponent} from './sorting.component';
import {SortingRoutingModule} from './sorting-routing.module';
import {QuickSortComponent} from 'app/modules/sorting/components/quick-sort/quick-sort.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared/shared.module';
import { SorterComponent } from './components/sorter/sorter.component';

@NgModule({
  declarations: [
    SortingComponent,
    QuickSortComponent,
    SorterComponent
  ],
  imports: [
    CommonModule,
    SortingRoutingModule,
    MatIconModule,
    FormsModule,
    MatSliderModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [SortingComponent]
})
export class SortingModule {
}
