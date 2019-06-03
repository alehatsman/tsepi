type Callback<T> = (x: T, i: number) => void;

export default function forEach<A>(func: Callback<A>, coll: A[]): void {
  for (let i = 0; i < coll.length; i += 1) {
    func(coll[i], i);
  }
}
