import { ManageProductsComponent } from "./components/admin/manage-products/manage-products.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductformComponent } from "./components/admin/productform/productform.component";

const routes: Routes = [
  { path: "products", component: HomeComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "admin/dashboard", component: DashboardComponent },
  { path: "admin/products", component: ManageProductsComponent },
  { path: "admin/product", component: ProductformComponent },
  { path: "**", redirectTo: "products" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
