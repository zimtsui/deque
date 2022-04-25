import { DequeLike } from './deque-like';
import { Defined } from './queue-like';
import { RandomAccess } from './random-access';
export declare class Deque<T extends Defined> implements DequeLike<T>, RandomAccess<T> {
    private dEQ;
    constructor(initials?: Iterable<T>);
    getFront(): T;
    i(index: number): T;
    getLength(): number;
    push(item: T): void;
    unshift(item: T): void;
    pop(): T;
    shift(): T;
    [Symbol.iterator](): IterableIterator<T>;
}
