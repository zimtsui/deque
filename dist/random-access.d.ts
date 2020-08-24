import { LinearQueue } from './linear';
import { RandomAccessQueueInterface } from './interfaces';
declare class RandomAccessLinearQueue<T> extends LinearQueue<T> implements RandomAccessQueueInterface<T> {
    [index: number]: T;
    constructor(...elems: T[]);
    get length(): number;
    private n;
}
export { RandomAccessLinearQueue as default, RandomAccessLinearQueue, };
