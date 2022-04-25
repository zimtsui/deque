"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = void 0;
const DEQ = require("double-ended-queue");
const assert = require("assert");
class Deque {
    constructor(initials = []) {
        this.dEQ = new DEQ([...initials]);
    }
    getFront() {
        return this.i(0);
    }
    i(index) {
        assert(-this.dEQ.length <= index && index < this.dEQ.length);
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
        assert(count >= 1);
        assert(count <= this.dEQ.length);
        const item = this.i(-1);
        for (let i = 0; i < count; i++)
            this.dEQ.pop();
        return item;
    }
    shift(count = 1) {
        assert(count >= 1);
        assert(count <= this.dEQ.length);
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