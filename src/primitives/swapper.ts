/**
 * Swap numbers using bitwise operators.
 */
function swapper (a: number, b: number): number[] {
  a = a ^ b
  b = b ^ a
  a = a ^ b
  return [a, b]
}

export default swapper
