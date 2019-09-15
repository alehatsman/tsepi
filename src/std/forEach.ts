type Iteratee<T> = (x: T, i: number) => boolean | undefined | void

/**
 * Iterates over collection and invokes iteratee for each element.
 * The iteratee is invoked with two arguments: (value, index).
 * Iteratee function can stop iteration by explicitly returning false.
 *
 * @param iteratee - The function to execute on each item.
 * @param coll - The collection to iterate.
 * @returns void
 */
export default function forEAch<A>(iteratee: Iteratee<A>, coll: A[]): void {
  for (let i = 0; i < coll.length; i += 1) {
    const shouldStop = iteratee(coll[i], i)
    if (shouldStop === false) {
      break
    }
  }
}
