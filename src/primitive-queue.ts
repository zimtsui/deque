interface PrimitiveQueueLike<T> {
    push(...items: T[]): unknown;
    shift(num?: number): unknown;
}

class PrimitiveQueue<T> implements PrimitiveQueueLike<T> {
    protected vector: T[] = [];
    protected front = 0;
    protected rear = 0;

    constructor(...elems: T[]) {
        this.push(...elems);
    }

    private shrink(): void {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
    }

    public push(...items: T[]): void {
        this.vector.push(...items);
        this.rear += items.length;
    }

    public shift(num = 1): void {
        if (this.front + num > this.rear) throw new Error('no enough elements');
        this.front += num;
        this.shrink();
    }
}

export {
    PrimitiveQueue as default,
    PrimitiveQueue,
    PrimitiveQueueLike,
};