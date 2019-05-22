/**
 * Find index of item in a array.
 *
 * @param array - array of items.
 * @param item - item to find.
 *
 * Performance:
 * Time: O(log N)
 * Space: O(1)
 */
export default function binarySearch<T>(array: T[], item: T): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (item === array[middle]) {
      return middle;
    } else if (item > array[middle]) {
      left = middle + 1;
    } else if (item < array[middle]) {
      right = middle - 1;
    }
  }

  return -1;
}
