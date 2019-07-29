import { Product } from './prototype';

const prototype = new Product('text');
prototype.print();

const clone = prototype.clone();
clone.print();
