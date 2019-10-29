import { Queue } from './queue';
/**
 * the subscript must be an integer, or an unpredictable error may occur.
 */
declare class NegativeSubscript<T> extends Queue<T> {
    [index: number]: T;
    constructor(...elems: T[]);
}
export default NegativeSubscript;
export { NegativeSubscript, };
