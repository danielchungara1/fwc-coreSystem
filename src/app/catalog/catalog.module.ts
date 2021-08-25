import {NgModule} from '@angular/core';
import {CatalogRoutingModule} from './catalog-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {CoreModule} from '@core/core.module';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import {LayoutComponent} from './components/layout/layout.component';
import { ImageSrcPipe } from './components/product/image/image-src-pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    LayoutComponent,
    ImageSrcPipe
  ],
  imports: [
    CatalogRoutingModule,
    CoreModule
  ]
})
export class CatalogModule {
}
