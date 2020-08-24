import { LinearQueue } from './linear';
import { RandomAccessQueueInterface } from './interfaces';
declare class RandomAccessLinearQueue<T> extends LinearQueue<T> implements RandomAccessQueueInterface<T> {
    [index: number]: T;
    constructor(...items: T[]);
    get length(): number;
}
export { RandomAccessLinearQueue as default, RandomAccessLinearQueue, };