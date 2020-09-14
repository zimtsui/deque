import { QueueLike } from './interfaces';

class LinearQueue<T> implements QueueLike<T> {
    public vector: T[] = [];
    public front = 0;
    public rear = 0;

    constructor(...items: T[]) {
        this.push(...items);
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

    public clear(): void {
        this.front = this.rear;
        this.shrink();
    }

    public shiftWhile(pred: (x: T) => boolean): void {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1);
        this.shrink();
    }
}

export {
    LinearQueue as default,
    LinearQueue,
};
