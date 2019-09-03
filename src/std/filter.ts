type Iteratee<T> = (x: T, i: number) => boolean;

/**
 * Iterates over collection, returning an array of all elements
 * iterateeicate returns thruly for.
 *
 * @param iteratee - The iterateeicate to invoke on each item.
 * @param coll - The collection to iterate over.
 * @returns coll - The new collection.
 */
function filter<T>(iteratee: Iteratee<T>, coll: T[]): T[] {
  const res = [] as T[];
  for (let i = 0; i < coll.length; i += 1) {
    const x = coll[i];
    if (iteratee(x, i)) {
      res.push(x);
    }
  }
  return res;
}

export default filter;
