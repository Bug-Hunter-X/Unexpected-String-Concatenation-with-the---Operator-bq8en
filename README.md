# Unexpected String Concatenation in JavaScript
This example demonstrates a common JavaScript issue: unexpected string concatenation when using the `+` operator with mixed data types.

## Bug Description
JavaScript's loose typing allows for implicit type coercion.  When the `+` operator encounters a string, it performs string concatenation, even if the other operand is a number. This can lead to unexpected results.

## How to Reproduce
1. Run `bug.js`.
2. Observe that numerical addition is only performed when both operands are numbers. Otherwise, string concatenation occurs.