export interface FifoLike<T> extends Iterable<T> {
    push(item: T): void;
    shift(): T;
    getLength(): number;
    getFront(): T;
}
export declare class NoEnoughElem extends Error {
    constructor();
}
