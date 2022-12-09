import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from "./products-list/products-list.component";
import {ProfileComponent} from "./profile/profile.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  { path: '', component: ProductsListComponent},
  { path: 'cart', component: CartComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
