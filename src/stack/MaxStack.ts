import LinkedList from '@/lists/LinkedList'

/**
 * MaxStack implementation using linked lists.
 * Supports max operation. Uses second linked list to store
 * max value for current value.
 *
 * Performance:
 * Space: O(2N)
 */
export default class MaxStack<T> {
  private readonly ll: LinkedList<T>
  private readonly ml: LinkedList<T>

  constructor () {
    this.ll = new LinkedList()
    this.ml = new LinkedList()
  }

  public push (item: T) {
    this.ll.prepend(item)

    if (this.ml.head == null) {
      this.ml.prepend(item)
      return
    }

    if (this.ml.head.value < item) {
      this.ml.prepend(item)
    } else {
      this.ml.prepend(this.ml.head.value)
    }
  }

  public pop (): T {
    if ((this.ll.head == null) || (this.ml.head == null)) {
      throw new Error('StackIsEmptyError')
    }

    const value = this.ll.head.value
    this.ll.remove(0)
    this.ml.remove(0)

    return value
  }

  public max (): T {
    if (this.ml.head == null) {
      throw new Error('StackIsEmptyError')
    }

    return this.ml.head.value
  }
}
