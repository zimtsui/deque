import { boundMethod } from 'autobind-decorator';
import parseNatural from './parse-natural';

class Queue<T> implements ArrayLike<T>, Iterable<T> {
    private vector: T[] = [];
    private front = 0;
    private rear = 0;
    [index: number]: T;

    constructor(...elems: T[]) {
        this.push(...elems);
        return new Proxy(this, {
            get: function (
                target,
                field,
                receiver,
            ) {
                try {
                    let subscript = parseNatural(field);
                    if (subscript < 0) subscript += target.length;
                    return target.vector[target.front + subscript];
                } catch (e) {
                    return Reflect.get(target, field, receiver);
                }
            }
        });
    }

    @boundMethod
    private shrink(): this {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
        return this;
    }

    @boundMethod
    public push(...elems: T[]): this {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this;
    }

    @boundMethod
    public shift(num = 1): this {
        if (this.front + num > this.rear) throw new Error('no enough elements');
        this.front += num;
        this.shrink();
        return this;
    }

    @boundMethod
    public clear(): this {
        this.front = this.rear;
        this.shrink();
        return this;
    }

    @boundMethod
    public shiftWhile(pred: (x: T) => boolean): this {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1);
        this.shrink();
        return this;
    }

    @boundMethod
    public [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }

    public get length() {
        return this.rear - this.front;
    }
}

export { Queue };
export default Queue;