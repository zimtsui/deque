import { PrimitiveQueue, } from './primitive-queue';
import chai from 'chai';
const { assert } = chai;
class RandomAccessQueue extends PrimitiveQueue {
    constructor(...elems) {
        super(...elems);
        return new Proxy(this, {
            get: function (target, field, receiver) {
                if (typeof field === 'string') {
                    const subscript = Number.parseInt(field);
                    if (Number.isNaN(subscript)) {
                        const returnValue = Reflect.get(target, field, target);
                        if (returnValue === target)
                            return receiver;
                        else
                            return returnValue;
                    }
                    else
                        return target.n(subscript);
                }
                else if (typeof field === 'number')
                    return target.n(field);
                else {
                    const returnValue = Reflect.get(target, field, target);
                    if (returnValue === target)
                        return receiver;
                    else
                        return returnValue;
                }
            }
        });
    }
    get length() {
        return this.rear - this.front;
    }
    n(index) {
        if (index < 0)
            index += this.length;
        assert(index >= 0 && index < this.length);
        return this.vector[this.front + index];
    }
}
export { RandomAccessQueue as default, RandomAccessQueue, };
//# sourceMappingURL=random-access-queue.js.map