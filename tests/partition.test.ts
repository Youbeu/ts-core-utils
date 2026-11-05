import { partition } from '../src/array/partition.js';
console.assert(partition([1, 2, 3], (x) => x > 1)[0].length === 2);
