export declare class Deque<T> implements Iterable<T> {
    private left;
    private right;
    constructor(initials?: Iterable<T>);
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
    getSize(): number;
    /**
     * Get the element at a specified index.
     * @param index - Can't be negative.
     * @throws RangeError
     */
    at(index: number): T;
    /**
     * Get the element at a specified index.
     * @param index - Can be negative.
     * @throws RangeError
     */
    i(index: number): T;
    slice(start?: number, end?: number): T[];
    /**
     * Time complexity of O(n).
     * @returns An iterator of a copy of the entire queue.
     */
    [Symbol.iterator](): IterableIterator<T>;
}
