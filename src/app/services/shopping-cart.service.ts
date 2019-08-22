import { Injectable } from "@angular/core";
import Product from "../models/Product";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  products: Product[] = [];

  constructor() {}

  /**
   *
   * @param product
   *
   */
  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(id: number) {
    return true;
  }

  getTotal() {
    return "Total";
  }
}
