import { ShoppingCartService } from "./../../services/shopping-cart.service";
import { Component, OnInit, Input } from "@angular/core";
import Product from "../../models/Product";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  addToShoppingCart(product: Product) {
    this.shoppingCartService.addProduct(product);
  }
}
