import Queue from '../..';
import test from 'ava';
import assert from 'assert';
import _ from 'lodash';

test.serial('test 1', t => {
    console.log = t.log;
    const q = new Queue<number>(1);
    assert.deepStrictEqual([...q], [1]);
    q.push(2, 3, 4, 5, 6, 7, 8);
    assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    assert(q.shift(1).shift(1)[-1] === 8);
    assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    q.shiftWhile(x => x < 5);
    assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert(q[0] === 5);
    assert(q[q.length - 1] === 8);
    assert.deepStrictEqual(_.takeWhile(q, x => x < 8), [5, 6, 7]);
    assert.deepStrictEqual(_.takeRightWhile(q, x => x > 5), [6, 7, 8]);
});