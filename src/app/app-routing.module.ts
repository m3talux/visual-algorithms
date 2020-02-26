import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('@home/home.module').then(m => m.HomeModule)},
  {path: 'sorting', loadChildren: () => import('@sorting/sorting.module').then(m => m.SortingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
