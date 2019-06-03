import { swap } from "@/std";

/**
 * Rearranges elements such that all elemets
 * less than xs[i] arrear first, followed by elements
 * equal to xs[i], followed by elemets greater than xs[i].
 *
 * @param arr - arr of numbers.
 * @param i - index of item.
 *
 * Performance:
 * Time: O(N)
 * Space: O(1)
 */
function rearrange<T>(arr: T[], i: number): void {
  const x = arr[i];
  let [p, q, r] = [0, 0, arr.length - 1];
  while (q <= r) {
    if (arr[q] < x) {
      swap(arr, q, p);
      p += 1;
      q += 1;
    } else if (arr[q] > x) {
      swap(arr, q, r);
      r -= 1;
    } else {
      q += 1;
    }
  }
}

export default rearrange;
