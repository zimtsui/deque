import { QueueLike } from './queue-like';
export interface DequeLike<T> extends QueueLike<T>, Iterable<T> {
    pop(): T;
    unshift(item: T): void;
}
