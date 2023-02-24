import { CreateProductComponent } from './pages/create-product/create-product.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path:"cart", component: BadgeComponent},
  {path:"create-product", component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
