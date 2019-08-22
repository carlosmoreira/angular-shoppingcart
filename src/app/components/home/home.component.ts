import { ShoppingCartService } from "./../../services/shopping-cart.service";
import { PRODUCTS } from "./../../mocks/ProductsMock";
import { Component, OnInit } from "@angular/core";
import Product from "../../models/Product";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor() {}

  ngOnInit() {
    this.products = PRODUCTS;
  }
}
