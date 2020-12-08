import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeadModule } from '../head/head.module';
import { FooterModule } from '../footer/footer.module';
import { MaterialsModule } from '../materials/materials.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { BannerComponent } from './banner/banner.component';
import { BgBannerComponent } from './bg-banner/bg-banner.component';
import { BlogComponent } from './blog/blog.component';
import { ItemComponent } from './item/item.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    BannerComponent,
    BgBannerComponent,
    BlogComponent,
    ItemComponent,
    HomeFooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeadModule,
    FooterModule,
    MaterialsModule,
    SlickCarouselModule,
    MatGridListModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
