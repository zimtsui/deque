declare class Queue<T> {
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
    readonly length: number;
    /**
     * @param index must be an integer, or an unpredictable error may occur.
     */
    n(index: number): T;
}
export default Queue;
export { Queue, };
