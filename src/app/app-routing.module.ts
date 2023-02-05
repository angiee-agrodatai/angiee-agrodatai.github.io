import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { BannerComponent } from '../app/banner/banner.component';
import { FrontPageComponent } from '../app/front-page/front-page.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { FooterComponent } from '../app/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'banner', component: BannerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'front-page', component: FrontPageComponent },
  { path: 'nav-bar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
