"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
class Queue {
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
        return this;
    }
    shift(num = 1) {
        if (this.front + num > this.rear)
            throw new Error('no enough elements');
        this.front += num;
        this.shrink();
        assert_1.default(this.front + this.front <= this.rear);
        return this;
    }
    clear() {
        this.front = this.rear;
        this.shrink();
        assert_1.default(this.front + this.front <= this.rear);
        return this;
    }
    get frontElem() {
        if (this.front === this.rear)
            throw new Error('getting front of an empty queue.');
        return this.vector[this.front];
    }
    get rearElem() {
        if (this.front === this.rear)
            throw new Error('getting front of an empty queue.');
        return this.vector[this.rear - 1];
    }
    shiftWhile(pred) {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1)
            ;
        this.shrink();
        assert_1.default(this.front + this.front <= this.rear);
        return this;
    }
    takeRearWhile(pred) {
        let i;
        for (i = this.rear; i > this.front && pred(this.vector[i - 1]); i -= 1)
            ;
        return this.vector.slice(i, this.rear).reverse();
    }
    takeFrontWhile(pred) {
        let i;
        for (i = this.front; i < this.rear && pred(this.vector[i]); i += 1)
            ;
        return this.vector.slice(this.front, i);
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