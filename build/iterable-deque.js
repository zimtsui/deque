"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IterableDeque = void 0;
const deque_1 = require("./deque");
const linked_list_1 = require("@zimtsui/linked-list");
class IterableDeque extends deque_1.Deque {
    constructor(initials = []) {
        super(initials);
        this.list = new linked_list_1.LinkedList();
        for (const x of initials)
            this.list.push(x);
    }
    /**
     * Time complexity of O(1).
     * @returns An iterator of the queue.
     */
    [Symbol.iterator]() {
        return this.list[Symbol.iterator]();
    }
    push(x) {
        super.push(x);
        this.list.push(x);
    }
    /**
     * @throws RangeError
     */
    pop() {
        super.pop();
        return this.list.pop();
    }
    /**
     * @throws RangeError
     */
    shift() {
        super.shift();
        return this.list.shift();
    }
    unshift(x) {
        super.unshift(x);
        this.list.unshift(x);
    }
}
exports.IterableDeque = IterableDeque;
//# sourceMappingURL=iterable-deque.js.map