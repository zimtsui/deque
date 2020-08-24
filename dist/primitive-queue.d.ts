interface PrimitiveQueueLike<T> {
    push(...items: T[]): unknown;
    shift(num?: number): unknown;
}
declare class PrimitiveQueue<T> implements PrimitiveQueueLike<T> {
    protected vector: T[];
    protected front: number;
    protected rear: number;
    constructor(...elems: T[]);
    private shrink;
    push(...items: T[]): void;
    shift(num?: number): void;
}
export { PrimitiveQueue as default, PrimitiveQueue, PrimitiveQueueLike, };
