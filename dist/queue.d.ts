import { RandomAccessQueue, RandomAccessQueueLike } from './random-access-queue';
interface QueueLike<T> extends RandomAccessQueueLike<T>, Iterable<T> {
}
declare class Queue<T> extends RandomAccessQueue<T> implements QueueLike<T> {
    [Symbol.iterator](): IterableIterator<T>;
}
export { Queue as default, Queue, QueueLike, };
