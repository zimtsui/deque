"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const _ = require("lodash");
const ava_1 = require("ava");
const assert = require("assert");
ava_1.default.serial('test deque', t => {
    const q = new __1.Deque([1]);
    assert.deepStrictEqual([...q], [1]);
    for (const x of [2, 3, 4, 5, 6, 7, 8])
        q.push(x);
    assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    q.shift();
    q.shift();
    assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    while (q.i(0) < 5)
        q.shift();
    assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert(q.i(0) === 5);
    assert(q.i(q.getSize() - 1) === 8);
    assert.deepStrictEqual(_.takeWhile([...q], x => x < 8), [5, 6, 7]);
    assert.deepStrictEqual(_.takeRightWhile([...q], x => x > 5), [6, 7, 8]);
});
ava_1.default.serial('test iterable deque', t => {
    const q = new __1.IterableDeque([1]);
    assert.deepStrictEqual([...q], [1]);
    for (const x of [2, 3, 4, 5, 6, 7, 8])
        q.push(x);
    assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    q.shift();
    q.shift();
    assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    while (q.i(0) < 5)
        q.shift();
    assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert(q.i(0) === 5);
    assert(q.i(q.getSize() - 1) === 8);
    assert.deepStrictEqual(_.takeWhile([...q], x => x < 8), [5, 6, 7]);
    assert.deepStrictEqual(_.takeRightWhile([...q], x => x > 5), [6, 7, 8]);
});
//# sourceMappingURL=test.js.map