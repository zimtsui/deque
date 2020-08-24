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
                    const index = Number.parseInt(field);
                    if (!Number.isNaN(index)) field = index;
                }
                if (typeof field === 'number')
                    return target.vector[target.front + field];
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
}

export {
    RandomAccessLinearQueue as default,
    RandomAccessLinearQueue,
}