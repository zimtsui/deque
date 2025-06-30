import { Destack } from "./destack.js";
import { offsetting } from "./offsetting.js";
export class Deque {
    left = new Destack([]);
    right;
    constructor(initials = []) {
        this.right = new Destack(initials);
    }
    pushBack(x) {
        try {
            this.left.pushFront(x);
        }
        catch (err) {
            this.right.pushBack(x);
        }
    }
    /**
     * @throws RangeError
     */
    popBack() {
        try {
            return this.right.popBack();
        }
        catch (err) {
            return this.left.popFront();
        }
    }
    /**
     * @throws RangeError
     */
    popFront() {
        try {
            return this.left.popBack();
        }
        catch (err) {
            return this.right.popFront();
        }
    }
    pushFront(x) {
        try {
            this.right.pushFront(x);
        }
        catch (err) {
            this.left.pushBack(x);
        }
    }
    getSize() {
        return this.left.getSize() + this.right.getSize();
    }
    /**
     * @throws RangeError
     */
    at(index) {
        index = offsetting(index, this.getSize());
        return index < this.left.getSize() ? this.left.at(-index - 1) : this.right.at(index - this.left.getSize());
    }
    slice(begin = 0, end = this.getSize()) {
        if ((begin = offsetting(begin, this.getSize())) <= (end = offsetting(end, this.getSize()))) { }
        else
            throw new RangeError();
        const r = [];
        for (let i = begin; i < end; i++)
            r.push(this.at(i));
        return r;
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.getSize(); i++)
            yield this.at(i);
    }
}
//# sourceMappingURL=deque.js.map