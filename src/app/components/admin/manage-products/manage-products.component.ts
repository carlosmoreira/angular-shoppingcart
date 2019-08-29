import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import Product from "../../../models/Product";
import { ProductHttpService } from "../../../services/product-http.service";

@Component({
  selector: "manage-products",
  templateUrl: "./manage-products.component.html",
  styleUrls: ["./manage-products.component.css"]
})
export class ManageProductsComponent implements OnInit {
  loading: boolean = false;
  error: string;
  products: Product[] = [];

  constructor(private productsService: ProductHttpService) {}

  ngOnInit() {
    this.loading = true;
    this.productsService.getProducts().subscribe(
      (products: Product[]) => {
        this.loading = false;
        console.log(products);
        this.products = products;
      },
      error => {
        this.loading = false;
        this.error = error.message;
      }
    );
  }
}
