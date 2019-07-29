export interface IProduct {
  action(): string;
}

export class SomeProductA implements IProduct {
  public action(): string {
    return 'ProductA';
  }
}

export class SomeProductB implements IProduct {
  public action(): string {
    return 'ProductB';
  }
}

export abstract class Creator {
  abstract make(): IProduct;

  public print() {
    const p: IProduct = this.make();
    console.log(p.action());
  }
}

export class SomeCreatorA extends Creator {
  make() {
    return new SomeProductA();
  }
}

export class SomeCreatorB extends Creator {
  make() {
    return new SomeProductB();
  }
}
