import { RandomAccessLinearQueue } from './random-access-linear';
import { RandomAccessIterableQueueInterface } from './interfaces';
declare class RandomAccessLinearIterableQueue<T> extends RandomAccessLinearQueue<T> implements RandomAccessIterableQueueInterface<T> {
    [Symbol.iterator](): IterableIterator<T>;
}
export { RandomAccessLinearIterableQueue as default, RandomAccessLinearIterableQueue, };
