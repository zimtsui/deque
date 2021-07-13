import UnderlyingDeque = require('double-ended-queue');

interface DequeLike<T> extends Iterable<T> {
    (index: number): T;
    [Symbol.iterator]: () => Iterator<T>;
    push(item: T): void;
    pop(): T;
    shift(): T;
    unshift(item: T): void;
    length: number;
}

function createDeque<T>(initial: T[] = []): DequeLike<T> {
    const u = new UnderlyingDeque<T>(initial);
    const deque = <DequeLike<T>>((i: number): T => {
        const item = u.get(i);
        if (item !== undefined) return item;
        throw new Error('Invalid index');
    });
    deque.push = (...items: T[]) => void u.push(...items);
    deque.pop = () => {
        const item = u.pop();
        if (item !== undefined) return item;
        throw new Error('Empty');
    }
    deque.shift = () => {
        const item = u.shift();
        if (item !== undefined) return item;
        throw new Error('Empty');
    }
    deque.unshift = (...items: T[]) => void u.unshift(...items);
    deque[Symbol.iterator] = () => u.toArray()[Symbol.iterator]();
    Reflect.defineProperty(deque, 'length', {
        get: () => u.length,
    });
    return deque;
}

export {
    createDeque,
    DequeLike,
}
