import { Context } from './state';

const context = new Context();

// empty
context.method2();
// transition
context.method1();

// empty
context.method1();
// transition
context.method2();
