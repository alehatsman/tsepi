type Callback<A, B> = (x: A, i: number) => B;

/**
 * Creates an array of values by invoking provided function on each
 * element in collection.
 * The callback function is invoked with two arguments: (value, index).
 *
 * @param callback - function to invoke on each element.
 * @param call - collection to iterate thru.
 *
 * @returns collection - collection with transformed values.
 */
export default function map<A, B>(callback: Callback<A, B>, coll: A[]): B[] {
  const result: B[] = [];
  for (let i = 0; i < coll.length; i += 1) {
    const x = coll[i];
    result.push(callback(x, i));
  }
  return result;
}
