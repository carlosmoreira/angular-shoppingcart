import { Injectable } from "@angular/core";
import Product from "../models/Product";
import ShoppingCartProduct from "../models/CartProduct";
import { ProductHelperService } from "./product-helper.service";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService {
  products: ShoppingCartProduct[] = [];

  constructor(private productHelper: ProductHelperService) {}

  /**
   *
   * @param product
   *
   */
  addProduct(product: Product): void {
    let foundProductInCart = this.products.find(
      productItr => product.id === productItr.product.id
    );
    if (foundProductInCart) {
      foundProductInCart.quantity++;
    } else {
      this.products.push(new ShoppingCartProduct(product));
    }
  }

  /**
   * @returns void
   * @param id
   */
  removeProduct(id: number): void {
    let index = this.products.findIndex(
      cartProduct => cartProduct.product.id === id
    );
    if (index > -1) this.products.splice(index, 1);
  }

  /**
   * @returns number
   */
  getTotal() {
    let total = 0;
    this.products.forEach(cartProduct => {
      total +=
        cartProduct.quantity *
        this.productHelper.getProductPrice(cartProduct.product);
    });
    return total;
  }
}
