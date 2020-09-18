import Deque from 'double-ended-queue';
declare class IADeque<T> extends Deque<T> {
    [index: number]: T;
    [Symbol.iterator]: () => Iterator<T>;
    constructor();
}
export { IADeque as default, IADeque, };
