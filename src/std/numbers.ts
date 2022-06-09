export function bin (x: number, size?: number): string {
  let r = x.toString(2)
  if (!size) {
    return r
  }

  while (r.length < size) {
    r = '0' + r
  }

  return r
}

export function bin2dec (x: string): number {
  return parseInt(x, 2)
}

export function hex (x: number): string {
  return x.toString(16)
}

export function hex2dec (x: string): number {
  return parseInt(x, 16)
}
