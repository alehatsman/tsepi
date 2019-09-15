/**
 * countBits - counts number of bits in number.
 * @param x - number
 * @return number of bits
 */
function countBits(x: number): number {
  let n = 0
  while (x > 0) {
    n += x & 1
    x = x >> 1
  }
  return n
}

export default countBits
