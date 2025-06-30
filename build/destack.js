import { offsetting } from "./offsetting.js";
export class Destack {
    v;
    front = 0;
    constructor(initials = []) {
        this.v = [...initials];
    }
    deflate() {
        this.v = this.v.slice(this.front);
        this.front = 0;
    }
    pushBack(x) {
        this.v.push(x);
    }
    getSize() {
        return this.v.length - this.front;
    }
    /**
     * @throws RangeError
     */
    popBack() {
        if (this.getSize()) { }
        else
            throw new RangeError();
        const x = this.v.pop();
        if (this.front + this.front > this.v.length)
            this.deflate();
        return x;
    }
    /**
     * @throws RangeError
     */
    popFront() {
        if (this.getSize()) { }
        else
            throw new RangeError();
        const x = this.v[this.front++];
        if (this.front + this.front > this.v.length)
            this.deflate();
        return x;
    }
    /**
     * @throws RangeError
     */
    pushFront(x) {
        if (this.front > 0) { }
        else
            throw new RangeError();
        this.v[--this.front] = x;
    }
    /**
     * @throws RangeError
     */
    at(index) {
        return this.v[this.front + offsetting(index, this.getSize())];
    }
    [Symbol.iterator]() {
        return this.v.slice(this.front)[Symbol.iterator]();
    }
}
//# sourceMappingURL=destack.js.map