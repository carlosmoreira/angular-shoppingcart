import { Injectable } from '@angular/core';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductHelperService {

  constructor() { }


  getProductPrice(product : Product){
      return (product.salePrice) ? product.salePrice : product.price;
  }
}
