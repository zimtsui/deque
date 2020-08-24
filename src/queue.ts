import {
    RandomAccessQueue,
    RandomAccessQueueLike,
} from './random-access-queue';

interface QueueLike<T> extends RandomAccessQueueLike<T>, Iterable<T> { }

class Queue<T> extends RandomAccessQueue<T> implements QueueLike<T>{
    public [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }
}

export {
    Queue as default,
    Queue,
    QueueLike,
}