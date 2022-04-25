"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = void 0;
const DEQ = require("double-ended-queue");
const deque_like_1 = require("./deque-like");
const queue_like_1 = require("./queue-like");
const random_access_1 = require("./random-access");
const assert = require("assert");
class Deque {
    constructor(initials = []) {
        this.dEQ = new DEQ([...initials]);
    }
    getFront() {
        return this.i(0);
    }
    i(index) {
        assert(-this.dEQ.length <= index && index < this.dEQ.length, new random_access_1.IndexOutOfRange());
        return this.dEQ.get(index);
    }
    getLength() {
        return this.dEQ.length;
    }
    push(...items) {
        this.dEQ.push(...items);
    }
    unshift(...items) {
        this.dEQ.unshift(...items);
    }
    pop(count = 1) {
        assert(count >= 1, new deque_like_1.ZeroElemPopped());
        assert(count <= this.dEQ.length, new queue_like_1.NoEnoughElem());
        const item = this.i(-1);
        for (let i = 0; i < count; i++)
            this.dEQ.pop();
        return item;
    }
    shift(count = 1) {
        assert(count >= 1, new queue_like_1.ZeroElemShifted());
        assert(count <= this.dEQ.length, new queue_like_1.NoEnoughElem());
        const item = this.i(0);
        for (let i = 0; i < count; i++)
            this.dEQ.shift();
        return item;
    }
    [Symbol.iterator]() {
        return this.dEQ.toArray()[Symbol.iterator]();
    }
}
exports.Deque = Deque;
//# sourceMappingURL=deque.js.map