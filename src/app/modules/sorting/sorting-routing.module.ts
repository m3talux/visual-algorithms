import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuickSortComponent} from './quick-sort/quick-sort.component';


const routes: Routes = [
  {path: '', component: QuickSortComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule {
}
