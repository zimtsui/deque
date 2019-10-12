declare class Queue<T> implements ArrayLike<T>, Iterable<T> {
    vector: T[];
    front: number;
    rear: number;
    [index: number]: T;
    constructor(...elems: T[]);
    private shrink;
    push(...elems: T[]): this;
    shift(num?: number): this;
    clear(): this;
    shiftWhile(pred: (x: T) => boolean): this;
    [Symbol.iterator](): IterableIterator<T>;
    readonly length: number;
}
export { Queue };
export default Queue;
