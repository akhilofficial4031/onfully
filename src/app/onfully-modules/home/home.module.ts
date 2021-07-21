import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxGalleryModule } from 'ngx-gallery-9';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IndexComponent } from './pages/index/index.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    BannerComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxGalleryModule
  ]
})
export class HomeModule { }
