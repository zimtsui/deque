import Queue from '../../dist/index';
// import Deque from 'double-ended-queue';
import _ from 'lodash';
import test from 'ava';
import chai from 'chai';
const { assert } = chai;
test.serial('test 1', t => {
    console.log = t.log;
    const q = new Queue();
    q.push(1);
    assert.deepStrictEqual([...q], [1]);
    q.push(2, 3, 4, 5, 6, 7, 8);
    assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    q.shift();
    q.shift();
    assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    while (q[0] < 5)
        q.shift();
    assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert(q[0] === 5);
    assert(q[q.length - 1] === 8);
    assert.deepStrictEqual(_.takeWhile(q, x => x < 8), [5, 6, 7]);
    assert.deepStrictEqual(_.takeRightWhile(q, x => x > 5), [6, 7, 8]);
});
//# sourceMappingURL=test.js.map