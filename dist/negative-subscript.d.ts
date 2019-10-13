import Queue from './queue';
declare type Subscript = symbol | string;
declare function parseInt<T>(x: Subscript): number;
declare class NegativeSubscript<T> extends Queue<T> {
    constructor(...elems: T[]);
}
export default NegativeSubscript;
export { parseInt, Subscript, NegativeSubscript, };
