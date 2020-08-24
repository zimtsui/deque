class LinearQueue {
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
    clear() {
        this.front = this.rear;
        this.shrink();
    }
    shiftWhile(pred) {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1)
            ;
        this.shrink();
    }
}
export { LinearQueue as default, LinearQueue, };
//# sourceMappingURL=linear.js.map