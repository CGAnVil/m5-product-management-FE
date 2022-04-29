import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './product/create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { DeleteComponent } from './product/delete/delete.component';
import { EditComponent } from './product/edit/edit.component';
import { DetailComponent } from './product/detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateComponent,
    CategoryListComponent,
    DeleteComponent,
    EditComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
