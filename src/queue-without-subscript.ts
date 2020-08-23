// import { boundMethod } from 'autobind-decorator';
import chai from 'chai';
const { assert } = chai;

interface QueueWithoutSubscriptLike<T> extends Iterable<T> {
    push(...elems: T[]): this;
    shift(num?: number): this;
    clear(): this;
    shiftWhile(pred: (x: T) => boolean): this;
    [Symbol.iterator](): IterableIterator<T>;
    readonly length: number;
}

class QueueWithoutSubscript<T> implements QueueWithoutSubscriptLike<T> {
    protected vector: T[] = [];
    protected front = 0;
    protected rear = 0;

    constructor(...elems: T[]) {
        this.push(...elems);
    }

    // @boundMethod
    private shrink(): this {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
        return this;
    }

    // @boundMethod
    public push(...elems: T[]): this {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this;
    }

    // @boundMethod
    public shift(num = 1): this {
        if (this.front + num > this.rear) throw new Error('no enough elements');
        this.front += num;
        this.shrink();
        return this;
    }

    // @boundMethod
    public clear(): this {
        this.front = this.rear;
        this.shrink();
        return this;
    }

    // @boundMethod
    public shiftWhile(pred: (x: T) => boolean): this {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1);
        this.shrink();
        return this;
    }

    // @boundMethod
    public [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }

    public get length() {
        return this.rear - this.front;
    }

    // @boundMethod
    /**
     * @param index must be an integer, or an unpredictable error may occur.
     */
    public n(index: number) {
        if (index < 0) index += this.length;
        assert(index >= 0 && index < this.length);
        return this.vector[this.front + index];
    }
}

export {
    QueueWithoutSubscript as default,
    QueueWithoutSubscript,
    QueueWithoutSubscriptLike,
};