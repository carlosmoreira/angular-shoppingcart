import Product from './Product';

export default class ShoppingCartProduct {
  product : Product;
  quantity : number;

  constructor(product : Product){
      this.product = product;
      this.quantity = 1;
  }
}
