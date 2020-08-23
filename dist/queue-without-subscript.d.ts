interface QueueWithoutSubscriptLike<T> extends Iterable<T> {
    push(...elems: T[]): this;
    shift(num?: number): this;
    clear(): this;
    shiftWhile(pred: (x: T) => boolean): this;
    [Symbol.iterator](): IterableIterator<T>;
    readonly length: number;
}
declare class QueueWithoutSubscript<T> implements QueueWithoutSubscriptLike<T> {
    protected vector: T[];
    protected front: number;
    protected rear: number;
    constructor(...elems: T[]);
    private shrink;
    push(...elems: T[]): this;
    shift(num?: number): this;
    clear(): this;
    shiftWhile(pred: (x: T) => boolean): this;
    [Symbol.iterator](): IterableIterator<T>;
    get length(): number;
    /**
     * @param index must be an integer, or an unpredictable error may occur.
     */
    n(index: number): T;
}
export { QueueWithoutSubscript as default, QueueWithoutSubscript, QueueWithoutSubscriptLike, };
