import {
    LinearQueue,
    arrayLikify,
    iterabilize,
} from '../../dist/index';
import _ from 'lodash';
import test from 'ava';
import chai from 'chai';
const { assert } = chai;

type ConstructorType<T> = new (...args: any[]) => T;

const Queue: ConstructorType<LinearQueue<number> & ArrayLike<number> & Iterable<number>>
    = iterabilize<number, ConstructorType<LinearQueue<number> & ArrayLike<number>>>(
        q => q.vector.slice(q.front, q.rear)[Symbol.iterator](),
    )(arrayLikify<number, ConstructorType<LinearQueue<number>>>(
        (q, i) => q.vector[q.front + i],
        q => q.rear - q.front,
    )(LinearQueue));

// const Queue: ConstructorType<LinearQueue<number> & Iterable<number>>
//     = iterabilize<number, ConstructorType<LinearQueue<number>>>(
//         q => q.vector.slice(q.front, q.rear)[Symbol.iterator](),
//     )(LinearQueue);

// const AQueue: ConstructorType<LinearQueue<number> & ArrayLike<number>>
//     = arrayLikify<number, ConstructorType<LinearQueue<number>>>(
//         (q, i) => q.vector[q.front + i],
//         q => q.rear - q.front,
//     )(LinearQueue);

// class Queue extends AQueue implements Iterable<number>{
//     public [Symbol.iterator]() {
//         console.log(1);
//         return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
//     }
// }

test.serial('test 1', t => {
    console.log = t.log;
    const q = new Queue(1);
    t.log(q[Symbol.iterator]);
    assert.deepStrictEqual([...q], [1]);
    // q.push(2, 3, 4, 5, 6, 7, 8);
    // assert.deepStrictEqual([...q], [1, 2, 3, 4, 5, 6, 7, 8]);
    // q.shift(1);
    // q.shift(1);
    // assert.deepStrictEqual([...q], [3, 4, 5, 6, 7, 8]);
    // q.shiftWhile(x => x < 5);
    // assert.deepStrictEqual([...q], [5, 6, 7, 8]);
    // assert(q[0] === 5);
    // assert(q[q.length - 1] === 8);
    // assert.deepStrictEqual(_.takeWhile(q, x => x < 8), [5, 6, 7]);
    // assert.deepStrictEqual(_.takeRightWhile(q, x => x > 5), [6, 7, 8]);
});
