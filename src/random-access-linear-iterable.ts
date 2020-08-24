import { RandomAccessLinearQueue } from './random-access';
import { RandomAccessIterableQueueInterface } from './interfaces';

class RandomAccessLinearIterableQueue<T>
    extends RandomAccessLinearQueue<T>
    implements RandomAccessIterableQueueInterface<T> {
    public [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }
}

export {
    RandomAccessLinearIterableQueue as default,
    RandomAccessLinearIterableQueue,
}