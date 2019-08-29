import { map } from "rxjs/operators";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ProductHttpService } from "../../../services/product-http.service";

@Component({
  selector: "app-productform",
  templateUrl: "./productform.component.html",
  styleUrls: ["./productform.component.css"]
})
export class ProductformComponent implements OnInit {
  productForm = this.fb.group({
    name: this.fb.control(""),
    price: this.fb.control(""),
    salePrice: this.fb.control(""),
    description: this.fb.control("")
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductHttpService
  ) {}

  ngOnInit() {}

  submitSaveProduct() {
    console.log("new Prod", this.productForm.value);
    let product = this.productForm.value;
    this.productService.storeProduct(product).subscribe(response => {
      console.log(response);
      alert("New Product Added");
      this.productForm.reset();
    });
  }
}
