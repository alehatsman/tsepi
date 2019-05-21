export default function map<A, B>(func: (x: A) => B, coll: A[]): B[] {
  const result: B[] = [];
  for (const x of coll) {
    result.push(func(x));
  }
  return result;
}
