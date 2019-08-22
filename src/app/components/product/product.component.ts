import { ShoppingCartService } from "./../../services/shopping-cart.service";
import { Component, OnInit, Input } from "@angular/core";
import Product from "../../models/Product";
import { ProductHelperService } from 'src/app/services/product-helper.service';

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor(
    private shoppingCartService: ShoppingCartService, 
    public productHelper : ProductHelperService) {}

  ngOnInit() {}

  addToShoppingCart(product: Product) {
    this.shoppingCartService.addProduct(product);
  }
}
