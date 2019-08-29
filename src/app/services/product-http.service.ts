import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Product from "../models/Product";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductHttpService {
  private baseUrl = "https://api-project-525485456680.firebaseio.com";
  constructor(private http: HttpClient) {}

  /**
   *
   */
  getProducts() {
    return this.http
      .get(this.baseUrl + "/products.json", {
        params: new HttpParams().set("print", "printPretty")
      })
      .pipe(
        map(response => {
          let products: any = [];
          for (let key in response) {
            products.push({ ...response[key], id: key });
          }
          return products;
        })
      );
  }

  storeProduct(product: Product) {
    return this.http.post(this.baseUrl + "/products.json", product);
  }
}
