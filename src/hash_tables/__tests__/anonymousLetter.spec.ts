import { forEach } from '@/std'
import anonymousLetter from '../anonymousLetter'

test('anonymousLetter', () => {
  const testCases = [
    { l: '', m: '', res: true },
    { l: 'a', m: '', res: false },
    { l: 'abc', m: 'abc', res: true },
    { l: 'abc', m: 'abcd', res: true },
    { l: 'aabc', m: 'aabcd', res: true }
  ]

  forEach(({ l, m, res }) => {
    expect(anonymousLetter(l, m)).toBe(res)
  }, testCases)
})
