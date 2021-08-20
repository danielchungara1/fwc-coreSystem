import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {CoreModule} from '@core/core.module';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import {LayoutComponent} from './components/layout/layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    LayoutComponent
  ],
  imports: [
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule {
}
