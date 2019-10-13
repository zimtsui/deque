# queue

method `shift` of javascript native `Array` has a time complexity of O(n), so `Array` cannot be used as data structure *queue*.

this class implements interface `ArrayLike` and `Iterable`. you can:

```js
import Queue from '';
import _ from 'lodash';
const q = new Queue<number>(1, 2, 3, 4, 5);

for (const x of q) console.log(x); // for of
console.log([...q]); // spreading operator
console.log(_.sum(q)); // lodash
```

it supports negative subscripts like in python:

```js
console.log(q[-1]); // -1 refers to the last element
```

there are mutable methods:

1. `push(...elems)` append elements to the ending.
2. `shift(num = 1)` removes the first *num* elements.
3. `shiftWhile(predicator)` removes elements from the beginning until `predicator` returns falsey.
4. `clear()` removes all elements.

these methods above return the queue itself and you can call them in a chain.