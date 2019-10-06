import { boundMethod } from 'autobind-decorator';

type Subscript = symbol | string;

function parseInt<T>(x: Subscript): number {
    if (typeof x === 'symbol') throw null;
    const NATURAL = /^(0$)|-?([1-9]\d*$)/;
    if (NATURAL.test(x)) return Number.parseInt(x); else throw null;
}

class Queue<T> implements ArrayLike<T>, Iterable<T> {
    public length = <number>{};
    [index: number]: T;
    public push(...elems: T[]) { return <this>{}; }
    public shift(num = 1) { return <this>{}; }
    public shiftWhile(pred: (x: T) => boolean) { return <this>{}; }
    public [Symbol.iterator]() { return <Iterator<T>>{}; }
    public clear() { return <this>{}; }

    constructor(...elems: T[]) {
        const internalQueue = new InternalQueue<T>(...elems);
        return new Proxy(<Queue<T>>{}, {
            get: function (
                target,
                field: Subscript,
                receiver: Queue<T>,
            ) {
                try {
                    let subscript = parseInt<T>(field);
                    if (subscript < 0) subscript += internalQueue.length;
                    return internalQueue.vector[
                        internalQueue.front + subscript
                    ];
                } catch (e) {
                    const member = Reflect.get(
                        internalQueue, field, internalQueue);
                    if (typeof member === 'function')
                        return function (...args: any[]) {
                            const returnValue = member(...args);
                            if (returnValue === internalQueue) return receiver;
                            else return returnValue;
                        }
                    else return member;
                }
            }
        });
    }
}

class InternalQueue<T> {
    public vector: T[] = [];
    public front = 0;
    public rear = 0;
    [index: number]: T;

    constructor(...elems: T[]) {
        this.push(...elems);
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

export default Queue;
export {
    parseInt,
    Queue,
    Subscript,
}