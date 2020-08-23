import { QueueWithoutSubscriptLike, QueueWithoutSubscript } from './queue-without-subscript';
interface QueueLike<T> extends QueueWithoutSubscriptLike<T>, ArrayLike<T> {
}
declare class Queue<T> extends QueueWithoutSubscript<T> implements QueueLike<T> {
    [index: number]: T;
    constructor(...elems: T[]);
}
export { Queue as default, Queue, QueueLike, };
