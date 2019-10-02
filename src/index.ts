import assert from 'assert';

class Queue<T> {
    private vector: T[] = [];
    private front = 0;
    private rear = 0;

    private shrink(): this {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
        return this;
    }

    push(...elems: T[]): this {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this;
    }

    shift(num = 1): this {
        if (this.front + num > this.rear) throw new Error('no enough elements');
        this.front += num;
        this.shrink();
        assert(this.front + this.front <= this.rear);
        return this;
    }

    clear(): this {
        this.front = this.rear;
        this.shrink();
        assert(this.front + this.front <= this.rear);
        return this;
    }

    get frontElem(): T {
        if (this.front === this.rear) throw new Error('getting front of an empty queue.');
        return this.vector[this.front];
    }

    get rearElem(): T {
        if (this.front === this.rear) throw new Error('getting front of an empty queue.');
        return this.vector[this.rear - 1];
    }

    shiftWhile(pred: (x: T) => boolean): this {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1);
        this.shrink();
        assert(this.front + this.front <= this.rear);
        return this;
    }

    takeRearWhile(pred: (x: T) => boolean): T[] {
        let i: number;
        for (i = this.rear; i > this.front && pred(this.vector[i - 1]); i -= 1);
        return this.vector.slice(i, this.rear);
    }

    takeFrontWhile(pred: (x: T) => boolean): T[] {
        let i: number;
        for (i = this.front; i < this.rear && pred(this.vector[i]); i += 1);
        return this.vector.slice(this.front, i);
    }

    [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }

    get length() {
        return this.rear - this.front;
    }
}

export default Queue;