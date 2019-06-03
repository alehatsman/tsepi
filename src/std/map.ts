type Callback<A, B> = (x: A, i: number) => B;

export default function map<A, B>(func: Callback<A, B>, coll: A[]): B[] {
  const result: B[] = [];
  for (let i = 0; i < coll.length; i += 1) {
    const x = coll[i];
    result.push(func(x, i));
  }
  return result;
}
