import { QueueWithoutSubscript, } from './queue-without-subscript';
class Queue extends QueueWithoutSubscript {
    constructor(...elems) {
        super(...elems);
        return new Proxy(this, {
            get: function (target, field, receiver) {
                if (typeof field === 'string') {
                    const subscript = Number.parseInt(field);
                    if (Number.isNaN(subscript)) {
                        const returnValue = Reflect.get(target, field, target);
                        if (returnValue === target)
                            return receiver;
                        else
                            return returnValue;
                    }
                    else
                        return target.n(subscript);
                }
                else if (typeof field === 'number')
                    return target.n(field);
                else {
                    const returnValue = Reflect.get(target, field, target);
                    if (returnValue === target)
                        return receiver;
                    else
                        return returnValue;
                }
            }
        });
    }
}
export { Queue as default, Queue, };
//# sourceMappingURL=queue.js.map