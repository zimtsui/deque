import UnderlyingDeque = require('double-ended-queue');

export type ElementType = null | number | symbol | string | object;

export interface QueueLike<T extends ElementType> extends Iterable<T> {
    (index: number): T;
    [Symbol.iterator]: () => Iterator<T>;
    push(item: T): void;
    shift(): T;
    length: number;
}

export interface DequeLike<T extends ElementType> extends QueueLike<T> {
    pop(): T;
    unshift(item: T): void;
}

/**
 * This is a factory function. Do not prepend a "new".
 */
export function Deque<T extends ElementType>(initial: T[] = []): DequeLike<T> {
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
    Deque as default,
}
