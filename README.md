# deque

A double-ended queue with support for negative subscripts.

## Comparison

Why not [petkaantonov/deque](https://github.com/petkaantonov/deque)?

Because it returns `undefined` rather than throws when range errors occur.

## Time complexity

- push/pop/shift/unshift: O(1) on average
- random access: O(1)
- get iterator: O(n)
