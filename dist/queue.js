"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const autobind_decorator_1 = require("autobind-decorator");
const chai_1 = require("chai");
// interface QueueLike<T> extends ArrayLike<T>, Iterable<T> {
//     push(...elems: T[]): this;
//     shift(num?: number): this;
//     clear(): this;
//     shiftWhile(pred: (x: T) => boolean): this;
//     [Symbol.iterator](): IterableIterator<T>;
//     length: number;
// }
class Queue {
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
    /**
     * @param index must be an integer, or an unpredictable error may occur.
     */
    n(index) {
        if (index < 0)
            index += this.length;
        chai_1.assert(index >= 0 && index < this.length);
        return this.vector[this.front + index];
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "shrink", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "push", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "shift", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "clear", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "shiftWhile", null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, Symbol.iterator, null);
__decorate([
    autobind_decorator_1.boundMethod
], Queue.prototype, "n", null);
exports.Queue = Queue;
exports.default = Queue;
//# sourceMappingURL=queue.js.map