/**
 * parity - counts number of bits which are 1s.
 * If the number is odd than it returns 1
 * otherwise returns 0.
 */
function parity(x: number): number {
  let i = x;
  let c = 0;
  while (i > 0) {
    c += i & 1; // tslint:disable-line
    i = i >> 1; // tslint:disable-line
  }

  return c % 2 === 0 ? 0 : 1;
}

export default parity;
