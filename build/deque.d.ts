export declare class Deque<T> implements Iterable<T> {
    private left;
    private right;
    constructor(initials?: Iterable<T>);
    pushBack(x: T): void;
    /**
     * @throws RangeError
     */
    popBack(): T;
    /**
     * @throws RangeError
     */
    popFront(): T;
    pushFront(x: T): void;
    getSize(): number;
    /**
     * @throws RangeError
     */
    at(index: number): T;
    slice(begin?: number, end?: number): T[];
    [Symbol.iterator](): Generator<T, void, void>;
}
