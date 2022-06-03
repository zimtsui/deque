"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = void 0;
const destack_1 = require("./destack");
class Deque {
    constructor(initials = []) {
        this.left = new destack_1.Destack([]);
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
     * @param index - Can't be negative.
     * @throws RangeError
     */
    at(index) {
        try {
            return this.left.at(this.left.getSize() - index - 1);
        }
        catch (err) {
            return this.right.at(index - this.left.getSize());
        }
    }
    /**
     * Get the element at a specified index.
     * @param index - Can be negative.
     * @throws RangeError
     */
    i(index) {
        try {
            return this.at(index);
        }
        catch (err) {
            return this.at(this.getSize() + index);
        }
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