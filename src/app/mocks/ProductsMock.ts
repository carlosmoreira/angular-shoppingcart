import Product from "../models/Product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Chicken",
    description: "Tasty Chicken",
    price: 5.65,
    salePrice: 4.34,
    reviews: 454,
    totalOrders: 8776
  },
  {
    id: 2,
    name: "Steak",
    description: "Tasty Steak",
    price: 24.65,
    salePrice: null,
    reviews: 354,
    totalOrders: 34
  },
  {
    id: 3,
    name: "Rice",
    description: "Mmmm Rice..",
    price: 10.65,
    salePrice: 9.34,
    reviews: 354,
    totalOrders: 234
  },
  {
    id: 4,
    name: "Waffles",
    description: "Lego my eggoo",
    price: 8.65,
    salePrice: 4.5,
    reviews: 14,
    totalOrders: 204
  }
];
