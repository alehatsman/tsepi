/**
 * Reduces collection to a value which is accumulated result of running
 * each element in the collection thru reducer function, where each invocation
 * is suplied with the result value of the previous invocation.
 *
 * @param reducer - reducer function.
 * @param coll - collection for reduce.
 * @param acc - default value for accumulator.
 *
 * @returns acc - accumulated value.
 */
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
