"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destack = void 0;
const assert = require("assert");
class Destack {
    constructor(initials) {
        this.front = 0;
        this.v = [...initials];
    }
    deflate() {
        this.v = this.v.slice(this.front);
        this.front = 0;
    }
    push(x) {
        this.v.push(x);
    }
    getSize() {
        return this.v.length - this.front;
    }
    pop() {
        assert(this.getSize() > 0, new RangeError());
        const x = this.v.pop();
        if (this.front + this.front > this.v.length)
            this.deflate();
        return x;
    }
    shift() {
        assert(this.getSize() > 0, new RangeError());
        const x = this.v[this.front++];
        if (this.front + this.front > this.v.length)
            this.deflate();
        return x;
    }
    unshift(x) {
        assert(this.front > 0, new RangeError());
        this.v[--this.front] = x;
    }
    at(index) {
        assert(0 <= index && index < this.getSize(), new RangeError());
        return this.v[this.front + index];
    }
    [Symbol.iterator]() {
        return this.v.slice(this.front)[Symbol.iterator]();
    }
}
exports.Destack = Destack;
//# sourceMappingURL=destack.js.map