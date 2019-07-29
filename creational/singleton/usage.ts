import { Singletone } from './singletone';

const objectOne = Singletone.makeInstance('one');
console.log(objectOne.param);

const objectTwo = Singletone.makeInstance('two');
console.log(objectTwo.param);

console.log(`Are this objects same? ${objectOne === objectTwo}`);
