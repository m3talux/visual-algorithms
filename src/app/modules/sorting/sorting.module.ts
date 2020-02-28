import {NgModule} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {SortingComponent} from './sorting.component';
import {SortingRoutingModule} from './sorting-routing.module';
import {QuickSortComponent} from 'app/modules/sorting/quick-sort/quick-sort.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    SortingComponent,
    QuickSortComponent
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
