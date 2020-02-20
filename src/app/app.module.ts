import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { QuickSortComponent } from './modules/quick-sort/quick-sort.component';
import { BarsComponent } from './shared/components/bars/bars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuickSortComponent,
    BarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
