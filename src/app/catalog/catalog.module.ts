import {NgModule} from '@angular/core';
import {CatalogRoutingModule} from './catalog-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {CoreModule} from '@core/core.module';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/product/carousel/carousel.component';
import {LayoutComponent} from './components/layout/layout.component';
import { ImageSrcPipe } from './components/product/image-src-pipe';
import { HomeComponent } from './components/home/home.component';
import { ResultSearchComponent } from './components/product/result-search/result-search.component';
import { CardComponent } from './components/product/card/card.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    CarouselComponent,
    LayoutComponent,
    ImageSrcPipe,
    HomeComponent,
    ResultSearchComponent,
    CardComponent,
    LoginComponent
  ],
  imports: [
    CatalogRoutingModule,
    CoreModule
  ]
})
export class CatalogModule {
}
