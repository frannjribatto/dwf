import * as jsonfile from "jsonfile";

class Product {
  id: number;
  name: string;
}

class ProductCollection {
  prod: Product[];

  async load() {
    const data = await jsonfile
      .readFile(__dirname + "/data.json")
      .then((file) => {
        this.prod = file;
        return this.prod;
      });
    return data;
  }

  getAll() {
    this.load().then(() => {
      return this.prod;
    });
  }

  getById(id: number) {
    this.load().then(() => {
      console.log("///////////////////////////////////////");
      return this.prod.find((data) => id == data.id);
    });
  }
}

const mockTest = new ProductCollection();
console.log(mockTest.getAll());
console.log(mockTest.getById(4));

export { Product, ProductCollection };
