import { pick } from '../src/object/pick.js';
console.assert('a' in pick({ a: 1, b: 2 }, ['a']));
