import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    FrontPageComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,

    NewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxSkeletonLoaderModule],
  // NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
