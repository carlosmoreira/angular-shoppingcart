import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ProductsComponent } from "./components/products/products.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
