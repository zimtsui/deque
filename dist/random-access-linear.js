import { LinearQueue } from './linear';
import chai from 'chai';
const { assert } = chai;
class RandomAccessLinearQueue extends LinearQueue {
    constructor(...items) {
        super(...items);
        return new Proxy(this, {
            get: function (target, field, receiver) {
                if (typeof field === 'string') {
                    const index = Number.parseInt(field);
                    if (!Number.isNaN(index))
                        field = index;
                }
                if (typeof field === 'number')
                    return target.vector[target.front + field];
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
}
export { RandomAccessLinearQueue as default, RandomAccessLinearQueue, };
//# sourceMappingURL=random-access-linear.js.map