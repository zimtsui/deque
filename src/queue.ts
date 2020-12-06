import Deque from 'double-ended-queue';

export interface QueueLike<T> extends ArrayLike<T>, Iterable<T> {
    [index: number]: T;
    [Symbol.iterator]: () => Iterator<T>;
    push(item: T): void;
    shift(): void;
}

class Queue<T> extends Deque<T> implements QueueLike<T> {
    [index: number]: T;
    public [Symbol.iterator]: () => Iterator<T>;

    constructor() {
        super();
        return new Proxy(this, {
            get(
                target: Queue<T>,
                field: string | symbol | number,
                receiver: Queue<T>
            ) {
                if (typeof field === 'string') {
                    const index = Number.parseInt(field);
                    if (!Number.isNaN(index)) field = index;
                }
                if (typeof field === 'number') return target.get(field);
                else if (field === Symbol.iterator)
                    return target.toArray()[Symbol.iterator];
                else {
                    const returnValue = Reflect.get(target, field, receiver);
                    if (returnValue === target) return receiver; else return returnValue;
                }
            }
        });
    }
}

export {
    Queue as default,
    Queue,
}
