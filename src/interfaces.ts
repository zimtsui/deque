export interface PrimitiveQueueInterface<T> {
    push(item: T): unknown;
    shift(num?: number): unknown;
}

export interface RandomAccessQueueInterface<T> extends PrimitiveQueueInterface<T>, ArrayLike<T> { }

export interface RandomAccessIterableQueueInterface<T> extends RandomAccessQueueInterface<T>, Iterable<T> { }
