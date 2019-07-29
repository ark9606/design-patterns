interface Prototype<T> {
  clone(): T;
}

export class Product implements Prototype<Product> {
  private property: string = 'default';
  constructor(p?: string) {
    this.property = p;
  }

  print() {
    console.log(this.property);
  }

  public clone(): Product {
    let clone = Object.create(this);
    return clone;
  }
}

