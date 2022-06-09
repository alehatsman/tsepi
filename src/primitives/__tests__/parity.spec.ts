import { forEach } from '@/std'

import {
  parity1,
  parity2,
  parity3,
  parity4,
  parity5
} from '@/primitives/parity'

describe('parity', () => {
  const implementations = [
    { parity: parity1, description: 'Parity implementation 1' },
    { parity: parity2, description: 'Parity implementation 2' },
    { parity: parity3, description: 'Parity implementation 3' }
  ]

  const testCases = [
    { input: 0b1, output: 1 },
    { input: 0b11, output: 0 },
    { input: 0b111, output: 1 },
    { input: 0b10101, output: 1 },
    { input: 0b1010111, output: 1 }
  ]

  it('should count parity', () => {
    forEach(({ parity, description }) => {
      forEach(({ input, output }) => {
        expect(
          parity(input),
          `${description}, input: ${input}, output: ${output}`
        ).toBe(output)
      }, testCases)
    }, implementations)
  })
})

describe('parity of 64bit integers', () => {
  it('should count parity', () => {
    const testCases = [
      { input: 0b11001010, output: 0 },
      { input: 0b11001011, output: 1 }
    ]

    forEach(({ input, output }) => {
      expect(parity4(input)).toBe(output)
    }, testCases)
  })
})

describe('parity of 32bit integers', () => {
  it('should count parity', () => {
    const testCases = [
      { input: Math.pow(2, 32) - 1, output: 0 },
      { input: Math.pow(2, 32) - 2, output: 1 },
      { input: Math.pow(2, 32) - 3, output: 1 }
    ]

    forEach(({ input, output }) => {
      expect(parity5(input)).toBe(output)
    }, testCases)
  })
})
