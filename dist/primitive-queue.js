class PrimitiveQueue {
    constructor(...elems) {
        this.vector = [];
        this.front = 0;
        this.rear = 0;
        this.push(...elems);
    }
    shrink() {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
    }
    push(...items) {
        this.vector.push(...items);
        this.rear += items.length;
    }
    shift(num = 1) {
        if (this.front + num > this.rear)
            throw new Error('no enough elements');
        this.front += num;
        this.shrink();
    }
}
export { PrimitiveQueue as default, PrimitiveQueue, };
//# sourceMappingURL=primitive-queue.js.map