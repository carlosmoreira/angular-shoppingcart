import { HomeComponent } from "./components/home/home.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "products", component: HomeComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "**", redirectTo: "products" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
