// import { boundMethod } from 'autobind-decorator';
import chai from 'chai';
const { assert } = chai;
class QueueWithoutSubscript {
    constructor(...elems) {
        this.vector = [];
        this.front = 0;
        this.rear = 0;
        this.push(...elems);
    }
    // @boundMethod
    shrink() {
        if (this.front > this.rear - this.front) {
            this.vector = this.vector.slice(this.front, this.rear);
            this.rear -= this.front;
            this.front = 0;
        }
        return this;
    }
    // @boundMethod
    push(...elems) {
        this.vector.push(...elems);
        this.rear += elems.length;
        return this;
    }
    // @boundMethod
    shift(num = 1) {
        if (this.front + num > this.rear)
            throw new Error('no enough elements');
        this.front += num;
        this.shrink();
        return this;
    }
    // @boundMethod
    clear() {
        this.front = this.rear;
        this.shrink();
        return this;
    }
    // @boundMethod
    shiftWhile(pred) {
        for (; this.front < this.rear && pred(this.vector[this.front]); this.front += 1)
            ;
        this.shrink();
        return this;
    }
    // @boundMethod
    [Symbol.iterator]() {
        return this.vector.slice(this.front, this.rear)[Symbol.iterator]();
    }
    get length() {
        return this.rear - this.front;
    }
    // @boundMethod
    /**
     * @param index must be an integer, or an unpredictable error may occur.
     */
    n(index) {
        if (index < 0)
            index += this.length;
        assert(index >= 0 && index < this.length);
        return this.vector[this.front + index];
    }
}
export { QueueWithoutSubscript as default, QueueWithoutSubscript, };
//# sourceMappingURL=queue-without-subscript.js.map