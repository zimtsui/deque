import { Deque } from '@zimtsui/deque';
import _ from 'lodash';
import test from 'ava';
import assert from 'node:assert';
test.serial('test deque', t => {
    const q = new Deque([1]);
    assert.deepStrictEqual([...q], [1]);
    for (const x of [2, 3, 4, 5, 6, 7, 8])
        q.pushBack(x);
    assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    q.popFront();
    q.popFront();
    assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    while (q.at(0) < 5)
        q.popFront();
    assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert(q.at(0) === 5);
    assert(q.at(q.getSize() - 1) === 8);
    assert.deepStrictEqual(_.takeWhile([...q], x => x < 8), [5, 6, 7]);
    assert.deepStrictEqual(_.takeRightWhile([...q], x => x > 5), [6, 7, 8]);
});
//# sourceMappingURL=test.js.map