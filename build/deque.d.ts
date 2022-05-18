export declare class Deque<T> implements Iterable<T> {
    private left;
    private right;
    constructor(initials: Iterable<T>);
    push(x: T): void;
    pop(): T;
    shift(): T;
    unshift(x: T): void;
    getSize(): number;
    i(index: number): T;
    [Symbol.iterator](): IterableIterator<T>;
}
