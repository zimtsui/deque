interface ConstructorType<T> {
    new (...args: any[]): T;
}
declare type GetItemFromIndex<T, Container> = (dS: Container, index: number) => T | undefined;
declare type GetLength<Container> = (dS: Container) => number;
declare function arrayLikify<T, OriginCtor extends ConstructorType<{}>>(getItemFromIndex?: GetItemFromIndex<T, InstanceType<OriginCtor>>, getLength?: GetLength<InstanceType<OriginCtor>>): (Origin: OriginCtor) => ConstructorType<InstanceType<OriginCtor> & ArrayLike<T>>;
export { arrayLikify as default, arrayLikify, };
