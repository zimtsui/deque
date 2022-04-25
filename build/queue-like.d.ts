export interface QueueLike<T> {
    push(item: T): void;
    shift(): T;
    getLength(): number;
    getFront(): T;
}
export declare class NoEnoughElem extends Error {
    constructor();
}
