import Queue from './queue';

type Subscript = symbol | string;

function parseInt<T>(x: Subscript): number {
    if (typeof x === 'symbol') throw null;
    const NATURAL = /^(0$)|-?([1-9]\d*$)/;
    if (NATURAL.test(x)) return Number.parseInt(x); else throw null;
}

class NegativeSubscript<T> implements ArrayLike<T>, Iterable<T> {
    public length = <number>{};
    [index: number]: T;
    public push(...elems: T[]) { return <this>{}; }
    public shift(num = 1) { return <this>{}; }
    public shiftWhile(pred: (x: T) => boolean) { return <this>{}; }
    public [Symbol.iterator]() { return <Iterator<T>>{}; }
    public clear() { return <this>{}; }

    constructor(...elems: T[]) {
        const queue = new Queue<T>(...elems);
        return new Proxy(<Queue<T>>{}, {
            get: function (
                target,
                field: Subscript,
                receiver: Queue<T>,
            ) {
                try {
                    let subscript = parseInt<T>(field);
                    if (subscript < 0) subscript += queue.length;
                    return queue.vector[
                        queue.front + subscript
                    ];
                } catch (e) {
                    const member = Reflect.get(
                        queue, field, queue);
                    if (typeof member === 'function')
                        return function (...args: any[]) {
                            const returnValue = member(...args);
                            if (returnValue === queue) return receiver;
                            else return returnValue;
                        }
                    else return member;
                }
            }
        });
    }
}

export default NegativeSubscript;
export {
    parseInt,
    Subscript,
    NegativeSubscript,
};