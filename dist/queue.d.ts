import Deque from 'double-ended-queue';
export interface QueueLike<T> extends ArrayLike<T>, Iterable<T> {
    [index: number]: T;
    [Symbol.iterator]: () => Iterator<T>;
    push(item: T): void;
    shift(): void;
}
declare class Queue<T> extends Deque<T> implements QueueLike<T> {
    [index: number]: T;
    [Symbol.iterator]: () => Iterator<T>;
    constructor();
}
export { Queue as default, Queue, };
