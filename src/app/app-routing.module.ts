import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then(module => module.CatalogModule)
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
