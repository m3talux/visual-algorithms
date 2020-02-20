import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuickSortComponent} from './modules/quick-sort/quick-sort.component';


const routes: Routes = [
  {path: '', component: QuickSortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
