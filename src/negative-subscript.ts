import Queue from './queue';

type Subscript = symbol | string;

function parseInt<T>(x: Subscript): number {
    if (typeof x === 'symbol') throw null;
    const NATURAL = /^(0$)|-?([1-9]\d*$)/;
    if (NATURAL.test(x)) return Number.parseInt(x); else throw null;
}

class NegativeSubscript<T> extends Queue<T> {
    constructor(...elems: T[]) {
        super();
        const queue = new Queue<T>(...elems);
        return new Proxy(<NegativeSubscript<T>>{}, {
            get: function (
                target,
                field: Subscript,
                receiver,
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