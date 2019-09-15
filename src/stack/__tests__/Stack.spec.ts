import Stack from '@/stack/Stack'

describe('Stack', () => {
  it('should support push and pop', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).toEqual(3)
    expect(stack.pop()).toEqual(2)
    expect(stack.pop()).toEqual(1)
  })

  it('should throw an error if pop on empty', () => {
    expect(() => {
      const stack = new Stack()
      stack.pop()
    }).toThrow('StackIsEmptyError')
  })
})
