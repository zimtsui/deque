export interface PrimitiveQueueInterface<T> {
    push(...items: T[]): unknown;
    shift(num?: number): unknown;
}
export interface RandomAccessQueueInterface<T> extends PrimitiveQueueInterface<T>, ArrayLike<T> {
}
export interface RandomAccessIterableQueueInterface<T> extends RandomAccessQueueInterface<T>, Iterable<T> {
}
