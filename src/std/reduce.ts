export default function reduce<A, B>(reducer: (acc: B, item: A) => B, coll: A[], accDefault?: B): B {
  if (!accDefault) {
    const [head, ...tail] = coll;
    return reduce(reducer, tail, (head as unknown) as B);
  }

  let acc = accDefault;
  for (const item of coll) {
    acc = reducer(acc, item);
  }
  return acc;
}
