type Callback<T> = (x: T, i: number) => boolean | undefined | void;

/**
 * Iterates over collection and invokes callback for each element.
 * The callback is invoked with two arguments: (value, index).
 * Callback function can stop iteration by explicitly returning false.
 *
 * @param callback - The function to execute on each item.
 * @param coll - The collection to iterate.
 * @returns void
 */
export default function forEAch<A>(callback: Callback<A>, coll: A[]): void {
  for (let i = 0; i < coll.length; i += 1) {
    const shouldStop = callback(coll[i], i);
    if (shouldStop === false) {
      break;
    }
  }
}
