class Queue<T> {
    public length: number = 0;
    [index: number]: T;
    public push(...elems: T[]): number { return <number>{}; }
    public shift(num = 1): this { return <this>{}; }
    public shiftWhile(pred: (x: T) => boolean): this { return <this>{}; }
    public [Symbol.iterator]() { return <Iterator<T>>{}; }
    public clear(): this { return <this>{}; }

    constructor() {
        return new Proxy<Queue<T>>(new InternalQueue<T>(), {
            get: function (
                internalQueue: InternalQueue<T>,
                field: string,
                queue: Queue<T>,
            ) {
                let subscript: number;
                try {
                    subscript = Number.parseInt(field);
                } catch (e) {
                    subscript = Number.NaN;
                }
                if (Number.isInteger(subscript)) {
                    if (subscript < 0) subscript += internalQueue.length;
                    return internalQueue.vector[
                        internalQueue.front + subscript
                    ];
                } else {
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

    private shrink(): this {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
        return this;
    }

    public push(...elems: T[]): number {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this.length;
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