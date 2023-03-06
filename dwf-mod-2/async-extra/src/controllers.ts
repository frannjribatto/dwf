import { Product, ProductCollection } from "./models";

class ProductController {
  data: ProductCollection;

  constructor() {
    this.data = new ProductCollection();
  }
}

console.log(ProductController);
