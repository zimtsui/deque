"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.length = 0;
        return new Proxy(new InternalQueue(), {
            get: function (internalQueue, field, queue) {
                let subscript;
                try {
                    subscript = Number.parseInt(field);
                }
                catch (e) {
                    subscript = Number.NaN;
                }
                if (Number.isInteger(subscript)) {
                    if (subscript < 0)
                        subscript += internalQueue.length;
                    return internalQueue.vector[internalQueue.front + subscript];
                }
                else {
                    const returnValue = Reflect.get(internalQueue, field, internalQueue);
                    if (returnValue === internalQueue)
                        return queue;
                    else
                        return returnValue;
                }
            }
        });
    }
    push(...elems) { return {}; }
    shift(num = 1) { return {}; }
    shiftWhile(pred) { return {}; }
    [Symbol.iterator]() { return {}; }
    clear() { return {}; }
}
class InternalQueue {
    constructor() {
        this.vector = [];
        this.front = 0;
        this.rear = 0;
    }
    shrink() {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
        return this;
    }
    push(...elems) {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this.length;
    }
    shift(num = 1) {
        if (this.front + num > this.rear)
            throw new Error('no enough elements');
        this.front += num;
        this.shrink();
        return this;
    }
    clear() {
        this.front = this.rear;
        this.shrink();
        return this;
    }
    shiftWhile(pred) {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1)
            ;
        this.shrink();
        return this;
    }
    [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }
    get length() {
        return this.rear - this.front;
    }
}
exports.default = Queue;
//# sourceMappingURL=index.js.map