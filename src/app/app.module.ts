import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ProductsComponent } from "./components/products/products.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { TopmenuComponent } from './components/admin/sections/topmenu/topmenu.component';
import { ProductformComponent } from './components/admin/productform/productform.component';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckoutComponent,
    DashboardComponent,
    TopmenuComponent,
    ProductformComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
