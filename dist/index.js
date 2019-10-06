"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const autobind_decorator_1 = require("autobind-decorator");
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
        const internalQueue = new InternalQueue(...elems);
        return new Proxy({}, {
            get: function (target, field, receiver) {
                try {
                    let subscript = parseInt(field);
                    if (subscript < 0)
                        subscript += internalQueue.length;
                    return internalQueue.vector[internalQueue.front + subscript];
                }
                catch (e) {
                    const member = Reflect.get(internalQueue, field, internalQueue);
                    if (typeof member === 'function')
                        return function (...args) {
                            const returnValue = member(...args);
                            if (returnValue === internalQueue)
                                return receiver;
                            else
                                return returnValue;
                        };
                    else
                        return member;
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
__decorate([
    autobind_decorator_1.boundMethod
], InternalQueue.prototype, "shrink", null);
__decorate([
    autobind_decorator_1.boundMethod
], InternalQueue.prototype, "push", null);
__decorate([
    autobind_decorator_1.boundMethod
], InternalQueue.prototype, "shift", null);
__decorate([
    autobind_decorator_1.boundMethod
], InternalQueue.prototype, "clear", null);
__decorate([
    autobind_decorator_1.boundMethod
], InternalQueue.prototype, "shiftWhile", null);
__decorate([
    autobind_decorator_1.boundMethod
], InternalQueue.prototype, Symbol.iterator, null);
exports.default = Queue;
//# sourceMappingURL=index.js.map