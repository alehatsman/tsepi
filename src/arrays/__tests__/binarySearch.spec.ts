import binarySearch from '@/arrays/binarySearch'
import { forEach } from '@/std'
import * as fc from 'fast-check'

describe('binarySearch', () => {
  it('should handle manual cases', () => {
    const testCases = [
      {
        input: [],
        item: 1,
        result: -1
      },
      {
        input: [1],
        item: 1,
        result: 0
      },
      {
        input: [1, 2],
        item: 1,
        result: 0
      },
      {
        input: [1, 2],
        item: 2,
        result: 1
      },
      {
        input: [1, 2, 3],
        item: 3,
        result: 2
      },
      {
        input: [1, 2, 3, 4],
        item: 3,
        result: 2
      }
    ]

    forEach((testCase) => {
      expect(testCase.result).toEqual(
        binarySearch(testCase.input, testCase.item)
      )
    }, testCases)
  })

  it('property based cases', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), fc.integer(), (coll, x) => {
        coll.sort((a, b) => a - b)
        const index = binarySearch(coll, x)
        const expectedIndex = coll.indexOf(x)
        return index === expectedIndex
      })
    )
  })
})
