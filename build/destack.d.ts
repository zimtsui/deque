export declare class Destack<T> implements Iterable<T> {
    private v;
    private front;
    constructor(initials?: Iterable<T>);
    private deflate;
    pushBack(x: T): void;
    getSize(): number;
    /**
     * @throws RangeError
     */
    popBack(): T;
    /**
     * @throws RangeError
     */
    popFront(): T;
    /**
     * @throws RangeError
     */
    pushFront(x: T): void;
    /**
     * @throws RangeError
     */
    at(index: number): T;
    [Symbol.iterator](): ArrayIterator<T>;
}
