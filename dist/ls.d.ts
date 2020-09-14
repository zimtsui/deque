interface DataStructure {
}
interface DataStructureCtor {
    new (...args: any[]): DataStructure;
}
declare const A: DataStructureCtor;
declare const a: DataStructure;
