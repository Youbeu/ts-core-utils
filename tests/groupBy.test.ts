import { groupBy } from '../src/array/groupBy.js';
console.assert(Object.keys(groupBy(['a', 'b'], (x) => x)).length === 2);
