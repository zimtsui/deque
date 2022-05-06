import { Deque } from '../..';
import _ = require('lodash');
import test from 'ava';
import assert = require('assert');


test.serial('test 1', t => {
    const q = new Deque<number>([1]);
    assert.deepStrictEqual([...q], [1]);
    for (const x of [2, 3, 4, 5, 6, 7, 8]) q.push(x);
    assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    q.shift();
    q.shift();
    assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    while (q.i(0) < 5) q.shift();
    assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert(q.i(0) === 5);
    assert(q.i(q.getLength() - 1) === 8);
    assert.deepStrictEqual(_.takeWhile([...q], x => x < 8), [5, 6, 7]);
    assert.deepStrictEqual(_.takeRightWhile([...q], x => x > 5), [6, 7, 8]);
});
