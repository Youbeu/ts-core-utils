import { retry } from '../src/async/retry.js';
void retry(async () => 42, 2, 5);
