# deque

[![Npm package version](https://badgen.net/npm/v/@zimtsui/deque)](https://www.npmjs.com/package/@zimtsui/deque)

A double-ended queue with support for negative subscripts.

## Comparison

Why not [petkaantonov/deque](https://github.com/petkaantonov/deque)?

Because it returns `undefined` rather than throws when range errors occur, and it takes time of O(n) to get an iterator.

## Time complexity

- push/pop/shift/unshift: amortized O(1)
- random access: O(1)
- get iterator: O(1)
