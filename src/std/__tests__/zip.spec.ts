import { zip } from '@/std'

test('zip', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [4, 5, 6]

  expect(zip(arr1, arr2)).toEqual([[1, 4], [2, 5], [3, 6]])
})
