import { RandomAccessLinearQueue } from './random-access';
class RandomAccessLinearIterableQueue extends RandomAccessLinearQueue {
    [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }
}
export { RandomAccessLinearIterableQueue as default, RandomAccessLinearIterableQueue, };
//# sourceMappingURL=random-access-linear-iterable.js.map