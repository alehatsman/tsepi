type OneArgCallback<T> = (x: T) => T;
type TwoArgCallback<T> = (x: T, i: number) => T;
export type Callback<T> = OneArgCallback<T> | TwoArgCallback<T>;
