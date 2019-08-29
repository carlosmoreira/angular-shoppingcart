import { HttpClient } from "@angular/common/http";

import { Component, OnInit, Input } from "@angular/core";
import Product from "../../models/Product";
import { PRODUCTS } from "../../mocks/ProductsMock";
import { map } from "rxjs/operators";

@Component({
  selector: "products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.products = PRODUCTS;
  }
}
