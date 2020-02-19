import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
