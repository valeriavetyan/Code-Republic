// 1.  Create the recursive function, which receives n parameter(Number) and returns n-th Fibonacci number of Fibonacci sequence

function fibonacci(k) {
  if (k <= 1) {
    return k;
  } else {
    return fibonacci(k - 1) + fibonacci(k - 2);
  }
}
console.log(fibonacci(10));

// 2. "CAHCE" your recursive function that you have been created by caching the numbers of Fibonacci sequence just for efficiency and for speed.

let cache = [];
function fibonacciCache(k) {
  if (k <= 1) {
    return k;
  } else if (cache[k]) {
    return cache[k];
  } else {
    cache[k] = fibonacciCache(k - 1, cache) + fibonacciCache(k - 2, cache);
  }
  return cache[k];
}
console.log(fibonacciCache(10));
