import { forEach } from '@/std'

import swapper from '@/primitives/swapper'

describe('swapper', () => {
  it('should swap number using bitwise operators', () => {
    const testCases = [[1, 1], [1, 2], [2, 1], [3, 4], [10, 11]]

    forEach((testCase) => {
      expect(swapper(testCase[0], testCase[1])).toEqual(testCase.reverse())
    }, testCases)
  })
})
