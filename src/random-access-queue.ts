import {
    PrimitiveQueue,
    PrimitiveQueueLike,
} from './primitive-queue';
import chai from 'chai';
const { assert } = chai;

interface RandomAccessQueueLike<T> extends PrimitiveQueueLike<T>, ArrayLike<T> { }

class RandomAccessQueue<T> extends PrimitiveQueue<T> implements RandomAccessQueueLike<T>{
    [index: number]: T;

    constructor(...elems: T[]) {
        super(...elems);
        return new Proxy(this, {
            get: function (
                target: RandomAccessQueue<T>,
                field: string | symbol | number,
                receiver: RandomAccessQueue<T>,
            ) {
                if (typeof field === 'string') {
                    const subscript = Number.parseInt(field);
                    if (Number.isNaN(subscript)) {
                        const returnValue = Reflect.get(target, field, target);
                        if (returnValue === target) return receiver; else return returnValue;
                    }
                    else return target.n(subscript);
                } else if (typeof field === 'number')
                    return target.n(field);
                else {
                    const returnValue = Reflect.get(target, field, target);
                    if (returnValue === target) return receiver; else return returnValue;
                }
            }
        });
    }

    public get length(): number {
        return this.rear - this.front;
    }

    private n(index: number) {
        if (index < 0) index += this.length;
        assert(index >= 0 && index < this.length);
        return this.vector[this.front + index];
    }
}

export {
    RandomAccessQueue as default,
    RandomAccessQueue,
    RandomAccessQueueLike,
}