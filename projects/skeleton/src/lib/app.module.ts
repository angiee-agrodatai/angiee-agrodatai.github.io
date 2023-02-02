import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { BannerComponent } from './banner/banner.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { InformationMarketComponent } from './information-market/information-market.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    BannerComponent,
    FrontPageComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    InformationMarketComponent,
    NewsComponent,
  ],
  imports: [BrowserModule, NgxSkeletonLoaderModule],
  // NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
  providers: [],
  bootstrap: [],
})
export class AppModule {}
