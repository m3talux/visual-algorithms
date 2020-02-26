import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {HomeComponent} from '@home/home.component';
import {HomeRoutingModule} from '@home/home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
