import { LinkedList } from '@/std/collections/LinkedList'

/**
 * Simple stack implementation using linked lists.
 * Performance:
 * Space: O(N)
 */
export default class Stack<T> {
  private readonly ll: LinkedList<T>

  constructor () {
    this.ll = new LinkedList()
  }

  /**
   * Adds one element on top of the stack.
   * Performance:
   * Time: O(1)
   * Space: O(1)
   */
  public push (value: T) {
    this.ll.prepend(value)
  }

  /**
   * Removes top element from the stack and returns that element.
   * Performance:
   * Time: O(1)
   * Space: O(1)
   */
  public pop (): T {
    if (this.ll.head == null) {
      throw new Error('StackIsEmptyError')
    }

    const value = this.ll.head.value
    this.ll.remove(0)
    return value
  }
}
