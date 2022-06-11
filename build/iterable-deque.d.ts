import { Deque } from './deque';
export declare class IterableDeque<T> extends Deque<T> {
    private list;
    constructor(initials?: Iterable<T>);
    /**
     * Time complexity of O(1).
     * @returns An iterator of the queue.
     */
    [Symbol.iterator](): Iterator<T, void, undefined>;
    push(x: T): void;
    /**
     * @throws RangeError
     */
    pop(): T;
    /**
     * @throws RangeError
     */
    shift(): T;
    unshift(x: T): void;
}
