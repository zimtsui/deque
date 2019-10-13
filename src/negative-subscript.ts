import Queue from './queue';

type Subscript = symbol | string;

function parseInt<T>(x: Subscript): number {
    if (typeof x === 'symbol') throw null;
    const NATURAL = /^(0$)|-?([1-9]\d*$)/;
    if (NATURAL.test(x)) return Number.parseInt(x); else throw null;
}

class NegativeSubscript<T> extends Queue<T> {
    constructor(...elems: T[]) {
        super(...elems);
        return new Proxy(this, {
            get: function (
                target,
                field: Subscript,
                receiver,
            ) {
                try {
                    let subscript = parseInt<T>(field);
                    if (subscript < 0) subscript += target.length;
                    return target.vector[
                        target.front + subscript
                    ];
                } catch (e) {
                    const member = Reflect.get(
                        target, field, receiver);
                    return member;
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