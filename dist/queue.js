import { RandomAccessQueue, } from './random-access-queue';
class Queue extends RandomAccessQueue {
    [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }
}
export { Queue as default, Queue, };
//# sourceMappingURL=queue.js.map