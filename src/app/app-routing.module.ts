import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {BlogComponent} from './components/blog/blog.component';
import {ShopComponent} from './components/shop/shop.component';
import {AboutComponent} from './components/about/about.component';
import {AdminComponent} from './components/admin/admin.component';


const routes: Routes = [
  {path: 'contact' , component: ContactUsComponent},
  {path: 'blog' , component: BlogComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
