import binarySearch from '@/search/binarySearch'
import { forEach } from '@/std'

function createBigArray() {
  const res = []
  for (let i = 0; i <= 1000; i += 1) {
    res.push(i)
  }
  return res
}

test('binarySearch', () => {
  const testCases = [
    { coll: [], x: 44, index: -1 },
    { coll: [1], x: 1, index: 0 },
    { coll: [1, 2], x: 1, index: 0 },
    { coll: [1, 2], x: 2, index: 1 },
    { coll: [1, 2, 3], x: 3, index: 2 },
    { coll: [1, 2, 3, 4, 5, 6, 7, 8, 9], x: 9, index: 8 },
    { coll: createBigArray(), x: 888, index: 888 },
  ]

  forEach(({ coll, x, index }) => {
    expect(binarySearch(x, coll)).toEqual(index)
  }, testCases)
})
