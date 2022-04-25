export declare type Defined = null | number | symbol | string | object | boolean;
export interface QueueLike<T extends Defined> {
    push(...items: T[]): void;
    shift(count?: number): T;
    getLength(): number;
    getFront(): T;
}
export declare class NoEnoughElem extends Error {
    constructor();
}
export declare class ZeroElemShifted extends Error {
    constructor();
}
