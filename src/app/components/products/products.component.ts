import { Component, OnInit, Input } from "@angular/core";
import Product from "../../models/Product";
import { PRODUCTS } from "../../mocks/ProductsMock";

@Component({
  selector: "products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor() {}

  ngOnInit() {
    this.products = PRODUCTS;
  }
}
