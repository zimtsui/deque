declare class Queue<T> {
    private vector;
    private front;
    private rear;
    private shrink;
    push(...elems: T[]): this;
    shift(num?: number): this;
    clear(): this;
    readonly frontElem: T;
    readonly rearElem: T;
    shiftWhile(pred: (x: T) => boolean): this;
    takeRearWhile(pred: (x: T) => boolean): T[];
    takeFrontWhile(pred: (x: T) => boolean): T[];
    [Symbol.iterator](): IterableIterator<T>;
    readonly length: number;
}
export default Queue;
