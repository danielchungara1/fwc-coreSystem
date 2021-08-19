import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/dashboard.module').then(module => module.DashboardModule)
  }, // lazy load
  {
    path: '**',
    redirectTo: 'catalog'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
