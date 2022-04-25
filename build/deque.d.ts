import { DequeLike } from './deque-like';
import { Defined } from './queue-like';
import { RandomAccess } from './random-access';
export declare class Deque<T extends Defined> implements DequeLike<T>, RandomAccess<T> {
    private dEQ;
    constructor(initials?: Iterable<T>);
    i(index: number): T;
    getLength(): number;
    push(...item: T[]): void;
    unshift(...item: T[]): void;
    pop(count?: number): T;
    shift(count?: number): T;
    [Symbol.iterator](): IterableIterator<T>;
}
