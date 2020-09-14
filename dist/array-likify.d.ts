interface ConstructorType<T> {
    new (...args: any[]): T;
}
declare type GetItemFromIndex<T, Container> = (dS: Container, index: number) => T | undefined;
declare type GetLength<Container> = (dS: Container) => number;
declare function arrayLikify<T, ContainerCtor extends ConstructorType<{}>>(getItemFromIndex: GetItemFromIndex<T, InstanceType<ContainerCtor>>, getLength: GetLength<InstanceType<ContainerCtor>>): (Origin: ContainerCtor) => {
    new (...args: any[]): {
        [index: number]: T;
        readonly length: number;
    };
} & ContainerCtor;
export { arrayLikify as default, arrayLikify, };
