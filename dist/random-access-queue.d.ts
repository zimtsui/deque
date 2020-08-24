import { PrimitiveQueue, PrimitiveQueueLike } from './primitive-queue';
interface RandomAccessQueueLike<T> extends PrimitiveQueueLike<T>, ArrayLike<T> {
}
declare class RandomAccessQueue<T> extends PrimitiveQueue<T> implements RandomAccessQueueLike<T> {
    [index: number]: T;
    constructor(...elems: T[]);
    get length(): number;
    private n;
}
export { RandomAccessQueue as default, RandomAccessQueue, RandomAccessQueueLike, };
