import { uniqBy } from '../src/array/uniqBy.js';
console.assert(uniqBy([1, 1, 2], (x) => x).length === 2);
