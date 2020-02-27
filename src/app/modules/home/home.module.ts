import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {HomeComponent} from '@home/home.component';
import {HomeRoutingModule} from '@home/home-routing.module';
import {SortingMenuItemComponent} from './sorting-menu-item/sorting-menu-item.component';
import {SharedModule} from '@shared/shared.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    SortingMenuItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
