import { QueueLike, Defined } from './queue-like';
export interface DequeLike<T extends Defined> extends QueueLike<T>, Iterable<T> {
    pop(count?: number): T;
    unshift(...items: T[]): void;
}
export declare class ZeroElemPopped extends Error {
    constructor();
}
