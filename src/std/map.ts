type Iteratee<A, B> = (x: A, i: number) => B

/**
 * Creates an array of values by invoking provided function on each
 * element in collection.
 * The iteratee function is invoked with two arguments: (value, index).
 *
 * @param iteratee - function to invoke on each element.
 * @param coll - collection to iterate through.
 *
 * @returns collection - collection with transformed values.
 */
export default function map<A, B>(iteratee: Iteratee<A, B>, coll: A[]): B[] {
  const result: B[] = []
  for (let i = 0; i < coll.length; i += 1) {
    const x = coll[i]
    result.push(iteratee(x, i))
  }
  return result
}
