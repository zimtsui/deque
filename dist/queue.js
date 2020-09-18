import Deque from 'double-ended-queue';
class IADeque extends Deque {
    constructor() {
        super();
        return new Proxy(this, {
            get(target, field, receiver) {
                if (typeof field === 'string') {
                    const index = Number.parseInt(field);
                    if (!Number.isNaN(index))
                        field = index;
                }
                if (typeof field === 'number')
                    return target.get(field);
                else if (field === Symbol.iterator)
                    return target.toArray()[Symbol.iterator];
                else
                    return Reflect.get(target, field, receiver);
            }
        });
    }
}
export { IADeque as default, IADeque, };
//# sourceMappingURL=queue.js.map