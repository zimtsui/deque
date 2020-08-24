import { LinearQueue } from './linear';
import { RandomAccessQueueInterface } from './interfaces';
import chai from 'chai';
const { assert } = chai;

class RandomAccessLinearQueue<T> extends LinearQueue<T> implements RandomAccessQueueInterface<T>{
    [index: number]: T;

    constructor(...items: T[]) {
        super(...items);
        return new Proxy(this, {
            get: function (
                target: RandomAccessLinearQueue<T>,
                field: string | symbol | number,
                receiver: RandomAccessLinearQueue<T>,
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
    RandomAccessLinearQueue as default,
    RandomAccessLinearQueue,
}