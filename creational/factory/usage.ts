import { Creator, SomeCreatorA, SomeCreatorB } from './factory';


const use = (creator: Creator) => {

  // Creator method
  creator.print();

  // Creator factory method
  const product = creator.make();
  console.log('product = ', product.action());
}

use(new SomeCreatorA());
use(new SomeCreatorB());
