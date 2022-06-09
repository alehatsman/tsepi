/**
 * parity - counts number of bits which are 1s.
 * If the number is odd than it returns 1
 * otherwise returns 0.
 */

/**
 * parity1.
 * Count number of 1s and shift number right by one.
 * Check if number of 1s is odd or even.
 * Performance:
 * Time: O(N) where N number of bits
 * Space: O(1)
 */
export function parity1 (x: number): number {
  let r = 0
  while (x > 0) {
    r += x & 1
    x >>= 1
  }
  return r % 2 === 0 ? 0 : 1
}

/**
 * parity2.
 * Store current flag which shows if number of 1s
 * was even or odd so far.
 * Use xor on every iteration and shift number.
 * Performance:
 * Time: O(N) where N number of bits
 * Space: O(1)
 */
export function parity2 (x: number): number {
  let result = 0
  while (x) {
    result ^= x & 1
    x >>= 1
  }
  return result
}

/**
 * parity3
 * Use bit trick x & (x - 1) = (x with lowest bit erased).
 * Performance:
 * Time: O(K) where K number of 1s
 * Space: O(1)
 */
export function parity3 (x: number): number {
  let result = 0
  while (x) {
    result ^= 1
    x &= x - 1
  }
  return result
}

const PRECOMPUTED_PARITY: number[] = (() => {
  const cache = []
  for (let i = 0; i <= 3; i++) {
    cache[i] = parity3(i)
  }
  return cache
})()

/**
 * parity4
 * Use cache to improve performance.
 * Time: O(n/L) n - word size, L - cache word size
 * Space: O(1)
 */
export function parity4 (x: number): number {
  const maskSize = 2
  const bitMask = 0b11
  return (
    PRECOMPUTED_PARITY[x >> (3 * maskSize)] ^
    PRECOMPUTED_PARITY[(x >> (2 * maskSize)) & bitMask] ^
    PRECOMPUTED_PARITY[(x >> maskSize) & bitMask] ^
    PRECOMPUTED_PARITY[x & bitMask]
  )
}

/**
 * parity5
 * Use property of parity and xor. Because it is associative
 * we can calc parity as parity of bin parts.
 *
 * Time: O(log n), n - number of bits
 * Space: O(1)
 */
export function parity5 (x: number): number {
  x ^= x >> 16
  x ^= x >> 8
  x ^= x >> 4
  x ^= x >> 2
  x ^= x >> 1
  return x & 1
}
