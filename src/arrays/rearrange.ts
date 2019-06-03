import { swap } from "@/std";

/**
 * Rearranges elements such that all elemets
 * less than xs[i] arrear first, followed by elements
 * equal to xs[i], followed by elemets greater than xs[i].
 *
 * @param array - array of numbers.
 * @param i - index of item.
 *
 * Performance:
 * Time: O(N)
 * Space: O(1)
 */
function rearrange<T>(array: T[], i: number): void {
  const x = array[i];
  let [p, q, r] = [0, 0, array.length - 1];
  while (q <= r) {
    if (array[q] < x) {
      swap(array, q, p);
      p += 1;
      q += 1;
    } else if (array[q] > x) {
      swap(array, q, r);
      r -= 1;
    } else {
      q += 1;
    }
  }
}

export default rearrange;
