import Queue from '../..';
import test from 'ava';
import assert from 'assert';

test('test 1', t => {
    const q = new Queue<number>();
    q.push(1);
    assert.deepStrictEqual([...q], [1]);
    q.push(2, 3, 4, 5, 6, 7, 8);
    assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    q.shift(2);
    assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    q.shiftWhile(x => x < 5);
    assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    assert(q.frontElem === 5);
    assert(q.rearElem === 8);
    assert.deepStrictEqual(q.takeFrontWhile(x => x < 8), [5, 6, 7]);
    assert.deepStrictEqual(q.takeRearWhile(x => x > 5), [8, 7, 6]);
});