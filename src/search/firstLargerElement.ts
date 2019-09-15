/**
 * Returns index of first element that is > x otherwise
 * returns -1.
 *
 * Performance:
 * Time: O(logN)
 * Space: O(1)
 */
function firstLargerElement<T>(x: T, coll: T[]): number {
  let [l, r] = [0, coll.length - 1]

  if (r === -1 || coll[r] <= x) {
    return -1
  }

  while (l < r) {
    const m = Math.floor(l + (r - l) / 2)
    if (x <= coll[m]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }

  while (x >= coll[l]) {
    l += 1
  }

  return l
}

export default firstLargerElement
