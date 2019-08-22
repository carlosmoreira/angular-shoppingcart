import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: "shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  constructor(public shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}
}
