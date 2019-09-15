/**
 * Find index of item in a arr.
 *
 * @param arr - arr of items.
 * @param item - item to find.
 *
 * Performance:
 * Time: O(log N)
 * Space: O(1)
 */
export default function binarySearch<T>(arr: T[], item: T): number {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (item === arr[middle]) {
      return middle
    } else if (item > arr[middle]) {
      left = middle + 1
    } else if (item < arr[middle]) {
      right = middle - 1
    }
  }

  return -1
}
