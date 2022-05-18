export declare class Destack<T> implements Iterable<T> {
    private v;
    private front;
    constructor(initials?: Iterable<T>);
    private deflate;
    push(x: T): void;
    getSize(): number;
    pop(): T;
    shift(): T;
    unshift(x: T): void;
    /**
     * unsafe
     */
    i(index: number): T;
    [Symbol.iterator](): IterableIterator<T>;
}
