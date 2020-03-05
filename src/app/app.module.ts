/* tslint:disable:no-trailing-whitespace */
import { ProductService } from './core/services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { PromoComponent } from './components/header/promo/promo.component';
import {RouterModule, Routes} from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageService } from './core/services/page.service';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '.products', pathMatch: 'full'},
  {path: 'search/:keyword', component: ProductListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AboutComponent,
    BlogComponent,
    AdminComponent,
    ContactFormComponent,
    ContactUsComponent,
    FeaturedProductsComponent,
    FooterComponent,
    HeaderComponent,
    ShopComponent,
    PromoComponent,
    SidebarComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
