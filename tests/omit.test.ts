import { omit } from '../src/object/omit.js';
console.assert(!('b' in omit({ a: 1, b: 2 }, ['b'])));
