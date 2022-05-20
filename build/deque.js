"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = void 0;
const destack_1 = require("./destack");
class Deque {
    constructor(initials = []) {
        this.left = new destack_1.Destack();
        this.right = new destack_1.Destack(initials);
    }
    push(x) {
        try {
            this.left.unshift(x);
        }
        catch (err) {
            this.right.push(x);
        }
    }
    /**
     * @throws RangeError
     */
    pop() {
        try {
            return this.right.pop();
        }
        catch (err) {
            return this.left.shift();
        }
    }
    /**
     * @throws RangeError
     */
    shift() {
        try {
            return this.left.pop();
        }
        catch (err) {
            return this.right.shift();
        }
    }
    unshift(x) {
        try {
            this.right.unshift(x);
        }
        catch (err) {
            this.left.push(x);
        }
    }
    getSize() {
        return this.left.getSize() + this.right.getSize();
    }
    /**
     * Get the element at a specified index.
     * @param index - Can be negative.
     * @throws RangeError
     */
    i(index) {
        if (this.left.getSize() <= index && index < this.getSize())
            return this.right.i(index - this.left.getSize());
        if (0 <= index && index < this.left.getSize())
            return this.left.i(this.left.getSize() - (index + 1));
        if (-this.right.getSize() <= index && index < 0)
            return this.right.i(this.right.getSize() + index);
        if (-this.getSize() <= index && index < -this.right.getSize())
            return this.left.i(-index - this.right.getSize() - 1);
        throw new RangeError();
    }
    /**
     * Time complexity of O(n).
     * @returns An iterator of a copy of the entire queue.
     */
    [Symbol.iterator]() {
        return [
            ...[...this.left].reverse(),
            ...this.right,
        ][Symbol.iterator]();
    }
}
exports.Deque = Deque;
//# sourceMappingURL=deque.js.map