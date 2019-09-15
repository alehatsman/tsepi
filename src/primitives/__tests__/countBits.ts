import { forEach } from '@/std'
import countBits from '../countBits'

describe('countBits', () => {
  it('should count bits', () => {
    const testCases = [
      {
        input: 0,
        output: 0,
      },
      {
        input: 1,
        output: 1,
      },
      {
        input: 3,
        output: 2,
      },
      {
        input: 8,
        output: 1,
      },
      {
        input: 9,
        output: 2,
      },
    ]

    forEach(({ input, output }) => {
      expect(countBits(input)).toBe(output)
    }, testCases)
  })
})
