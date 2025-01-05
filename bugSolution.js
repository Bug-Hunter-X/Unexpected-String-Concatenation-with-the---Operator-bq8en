function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    return String(a) + String(b); // Explicit string concatenation
  }
}
console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // "12"
console.log(foo("1", 2)); // "12"
console.log(foo("1", "2")); // "12" 