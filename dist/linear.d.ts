import { QueueLike } from './interfaces';
declare class LinearQueue<T> implements QueueLike<T> {
    vector: T[];
    front: number;
    rear: number;
    constructor(...items: T[]);
    private shrink;
    push(...items: T[]): void;
    shift(num?: number): void;
    clear(): void;
    shiftWhile(pred: (x: T) => boolean): void;
}
export { LinearQueue as default, LinearQueue, };
