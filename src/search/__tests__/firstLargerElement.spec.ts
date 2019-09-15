import firstLargerElement from '@/search/firstLargerElement'
import { forEach } from '@/std'

function createBigArray() {
  const res = []
  for (let i = 0; i <= 1000; i += 1) {
    res.push(i)
  }
  return res
}

test('firstLargerElement', () => {
  const coll = [-14, -10, 2, 108, 108, 243, 285, 285, 401]
  const testCases = [
    { coll: [], x: 44, index: -1 },
    { coll, x: 500, index: -1 },
    { coll, x: 101, index: 3 },
    { coll, x: 1, index: 2 },
    { coll, x: 284, index: 6 },
    { coll, x: 399, index: 8 },
    { coll: createBigArray(), x: 3, index: 4 },
  ]

  forEach(({ coll, x, index }) => {
    expect(firstLargerElement(x, coll)).toEqual(index)
  }, testCases)
})
