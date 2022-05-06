"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = void 0;
const DEQ = require("double-ended-queue");
const fifo_like_1 = require("./fifo-like");
const assert = require("assert");
class Deque {
    constructor(initials = []) {
        this.dEQ = new DEQ([...initials]);
    }
    getFront() {
        return this.i(0);
    }
    i(index) {
        assert(-this.dEQ.length <= index && index < this.dEQ.length, new RangeError('Index is out of range.'));
        return this.dEQ.get(index);
    }
    getLength() {
        return this.dEQ.length;
    }
    push(item) {
        this.dEQ.push(item);
    }
    unshift(item) {
        this.dEQ.unshift(item);
    }
    pop() {
        assert(this.dEQ.length > 0, new fifo_like_1.NoEnoughElem());
        return this.dEQ.pop();
    }
    shift() {
        assert(this.dEQ.length > 0, new fifo_like_1.NoEnoughElem());
        return this.dEQ.shift();
    }
    [Symbol.iterator]() {
        return this.dEQ.toArray()[Symbol.iterator]();
    }
}
exports.Deque = Deque;
//# sourceMappingURL=deque.js.map