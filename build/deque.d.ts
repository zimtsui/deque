export declare class Deque<T> implements Iterable<T> {
    private left;
    private right;
    constructor(initials?: Iterable<T>);
    push(x: T): void;
    /**
     * @throws {@link RangeError}
     */
    pop(): T;
    /**
     * @throws {@link RangeError}
     */
    shift(): T;
    unshift(x: T): void;
    getSize(): number;
    /**
     * Get the element at a specified index.
     * @param index - Can be negative.
     * @throws {@link RangeError}
     */
    i(index: number): T;
    /**
     * Time complexity of O(n).
     * @returns An iterator of a copy of the entire queue.
     */
    [Symbol.iterator](): IterableIterator<T>;
}
