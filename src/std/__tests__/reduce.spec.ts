import forEach from '@/std/forEach'
import reduce from '@/std/reduce'

test('reduce', () => {
  const testCases = [
    {
      args: [(x: number, y: number) => x + y, [1, 2, 3]],
      res: 6
    },
    {
      args: [(acc: {[key: number]: number}, x: number) => {
        acc[x] = x
        return acc
      }, [1, 2, 3], {}],
      res: { 1: 1, 2: 2, 3: 3 }
    }
  ]

  forEach((testCase) => {
    // @ts-expect-error ts-message: Expected 2 arguments, but got 3.
    expect(testCase.res).toEqual(reduce(...testCase.args))
  }, testCases)
})
