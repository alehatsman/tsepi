/**
 * Searches for item x in coll.
 * Returns index of the item.
 *
 * Performance:
 * Time: O(logN)
 * Space: O(1)
 */
export default function binarySearch<T>(x: T, coll: T[]): number {
  let [l, r] = [0, coll.length - 1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (coll[m] === x) {
      return m;
    } else if (x > coll[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return -1;
}
