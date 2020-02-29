import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuickSortComponent} from './components/quick-sort/quick-sort.component';
import {SortingComponent} from '@sorting/sorting.component';


const routes: Routes = [
  {path: '', component: SortingComponent},
  {path: 'quick-sort', component: QuickSortComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule {
}
