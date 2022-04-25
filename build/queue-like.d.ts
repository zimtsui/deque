export declare type Defined = null | number | symbol | string | object | boolean;
export interface QueueLike<T extends Defined> {
    push(item: T): void;
    shift(): T;
    getLength(): number;
    getFront(): T;
}
export declare class NoEnoughElem extends Error {
    constructor();
}
