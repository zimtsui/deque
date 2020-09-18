import Deque from 'double-ended-queue';
class IADeque extends Deque {
    constructor() {
        super();
        return new Proxy(this, {
            get: function (target, field, receiver) {
                if (typeof field === 'string') {
                    const index = Number.parseInt(field);
                    if (!Number.isNaN(index))
                        field = index;
                }
                if (typeof field === 'number')
                    return target.get(field);
                else if (field === Symbol.iterator) {
                    return target.toArray()[Symbol.iterator];
                }
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
export { IADeque as default, IADeque, };
//# sourceMappingURL=i-a-deque.js.map