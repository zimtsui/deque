import Deque from 'double-ended-queue';

export interface QueueLike<T> {
    push(item: T): void;
    shift(): void;
}

class IADeque<T> extends Deque<T> implements QueueLike<T> {
    [index: number]: T;
    public [Symbol.iterator]: () => Iterator<T>;

    constructor() {
        super();
        return new Proxy(this, {
            get(
                target: IADeque<T>,
                field: string | symbol | number,
                receiver: IADeque<T>
            ) {
                if (typeof field === 'string') {
                    const index = Number.parseInt(field);
                    if (!Number.isNaN(index)) field = index;
                }
                if (typeof field === 'number') return target.get(field);
                else if (field === Symbol.iterator)
                    return target.toArray()[Symbol.iterator];
                else return Reflect.get(target, field, receiver);
            }
        });
    }
}

export {
    IADeque as default,
    IADeque,
}
