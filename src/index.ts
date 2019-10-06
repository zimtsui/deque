type Subscript = symbol | string;

function parseInt<T>(x: Subscript): number {
    if (typeof x === 'symbol') throw null;
    const n = Number.parseInt(x);
    if (Number.isInteger(n)) return n; else throw null;
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
        return new Proxy<Queue<T>>(new InternalQueue<T>(...elems), {
            get: function (
                internalQueue: InternalQueue<T>,
                field: Subscript,
                queue: Queue<T>,
            ) {
                try {
                    let subscript = parseInt<T>(field);
                    if (subscript < 0) subscript += internalQueue.length;
                    return internalQueue.vector[
                        internalQueue.front + subscript
                    ];
                } catch (e) {
                    const returnValue = Reflect.get(
                        internalQueue, field, internalQueue);
                    if (returnValue === internalQueue) return queue;
                    else return returnValue;
                }
            }
        });
    }
}

class InternalQueue<T> implements Queue<T> {
    public vector: T[] = [];
    public front = 0;
    public rear = 0;
    [index: number]: T;

    constructor(...elems: T[]) {
        this.push(...elems);
    }

    private shrink(): this {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
        return this;
    }

    public push(...elems: T[]): this {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this;
    }

    public shift(num = 1): this {
        if (this.front + num > this.rear) throw new Error('no enough elements');
        this.front += num;
        this.shrink();
        return this;
    }

    public clear(): this {
        this.front = this.rear;
        this.shrink();
        return this;
    }

    shiftWhile(pred: (x: T) => boolean): this {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1);
        this.shrink();
        return this;
    }

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
}