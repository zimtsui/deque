export interface RandomAccess<T> {
    i(index: number): T;
}
export declare class IndexOutOfRange extends Error {
    constructor();
}
