import parseNatural from './parse-natural';
declare class Queue<T> implements ArrayLike<T>, Iterable<T> {
    private vector;
    private front;
    private rear;
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
export default Queue;
export { Queue, parseNatural, };
