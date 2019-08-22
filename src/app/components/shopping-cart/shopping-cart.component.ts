import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { ProductHelperService } from 'src/app/services/product-helper.service';

@Component({
  selector: "shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  constructor(public shoppingCartService: ShoppingCartService, public productHelper: ProductHelperService) {}

  ngOnInit() {}
}
