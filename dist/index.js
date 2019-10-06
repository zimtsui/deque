"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseInt(x) {
    if (typeof x === 'symbol')
        throw null;
    const NATURAL = /^(0$)|-?([1-9]\d*$)/;
    if (NATURAL.test(x))
        return Number.parseInt(x);
    else
        throw null;
}
exports.parseInt = parseInt;
class Queue {
    constructor(...elems) {
        this.length = {};
        return new Proxy(new InternalQueue(...elems), {
            get: function (internalQueue, field, receiver) {
                try {
                    let subscript = parseInt(field);
                    if (subscript < 0)
                        subscript += internalQueue.length;
                    return internalQueue.vector[internalQueue.front + subscript];
                }
                catch (e) {
                    const returnValue = Reflect.get(internalQueue, field, internalQueue);
                    if (returnValue === internalQueue)
                        return receiver;
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
exports.Queue = Queue;
class InternalQueue {
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
        return this;
    }
    push(...elems) {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this;
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