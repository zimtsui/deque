import {
    QueueWithoutSubscriptLike,
    QueueWithoutSubscript,
} from './queue-without-subscript';

interface QueueLike<T> extends QueueWithoutSubscriptLike<T>, ArrayLike<T> { }

class Queue<T> extends QueueWithoutSubscript<T> implements QueueLike<T> {
    [index: number]: T;

    constructor(...elems: T[]) {
        super(...elems);
        return new Proxy(this, {
            get: function (
                target: Queue<T>,
                field: string | symbol | number,
                receiver: Queue<T>,
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
}

export {
    Queue as default,
    Queue,
    QueueLike,
}