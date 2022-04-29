import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CreateComponent} from './product/create/create.component';


const routes: Routes = [

  {
    path: 'products', component: ProductListComponent
  },
  {
    path: 'categories', component: CategoryListComponent
  },
  {
    path:'products/create', component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
