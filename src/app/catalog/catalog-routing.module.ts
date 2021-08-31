import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {HomeComponent} from './components/home/home.component';
import {ResultSearchComponent} from './components/product/result-search/result-search.component';
import {LoginComponent} from './components/login/login.component';


const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        { path: 'result-search', component: ResultSearchComponent },
        { path: '**', component: HomeComponent }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogRoutingModule {
}
