export class LNode<T> {
  public value: T
  public next?: LNode<T>

  constructor (value: T) {
    this.value = value
  }
}

export class LinkedList<T> {
  public head?: LNode<T>

  /**
   * inserts value in position.
   *
   * @param value - value to insert.
   * @param position - position where to insert.
   *
   * Performance:
   * Time: O(P)
   * Space: O(1)
   */
  public insert (value: T, position: number) {
    const newNode = new LNode(value)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
      return
    }

    if (this.head == null) {
      throw new Error('index out of range error')
    }

    let i = 0
    let current: LNode<T> | undefined = this.head
    let prev: LNode<T> = current
    while ((current != null) && i < position) {
      i += 1
      prev = current
      current = current.next
    }

    prev.next = newNode
    newNode.next = current
  }

  /**
   * prepend value to the beginning of the list.
   *
   * @param value - value to prepend.
   *
   * Performance:
   * Time: O(1)
   * Space: O(1)
   */
  public prepend (value: T) {
    this.insert(value, 0)
  }

  /**
   * appends value to the end of list
   *
   * @param value - value to append.
   *
   * Performance:
   * Time: O(N)
   * Space: O(1)
   */
  public append (value: T) {
    const newNode = new LNode(value)
    const lastNode = this.last()
    if (lastNode == null) {
      this.head = newNode
      return
    }
    lastNode.next = newNode
  }

  public remove (position: number) {
    if (this.head == null) {
      throw new Error('No head')
    }

    if (position === 0) {
      this.head = this.head.next
      return
    }

    const node = this.index(position)
    if ((node != null) && (node.next != null)) {
      node.next = node.next.next
    }
  }

  /**
   * returns node by position
   *
   * @param position - position of item to return
   *
   * Performance:
   * Time: O(N)
   * Space: O(1)
   */
  public index (position: number): LNode<T> | undefined {
    if (position === 0) {
      return this.head
    }

    let i = 0
    let current = this.head
    if (current == null) {
      throw new Error('Index out of range')
    }

    while (i < position) {
      i += 1
      if (current.next == null) {
        break
      }
      current = current.next
    }

    return current
  }

  /**
   * returns last elements
   *
   * Performance:
   * Time: O(N)
   * Space: O(1)
   */
  public last (): LNode<T> | undefined {
    let current = this.head

    if (current == null) {
      return
    }

    while (current && (current.next != null)) {
      current = current.next
    }

    return current
  }

  public toArray (): T[] {
    if (this.head == null) {
      return []
    }
    return toArray(this.head)
  }
}

/**
 * returns linkedlist created from array
 *
 * Performance:
 * Time: O(N)
 * Space: O(N)
 */
export function fromArray<T> (arr: T[]): LinkedList<T> {
  const ll = new LinkedList<T>()

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const v = arr[i]
    ll.prepend(v)
  }

  return ll
}

/**
 * returns array with values from list
 *
 * Performance:
 * Time: O(N)
 * Space: O(N)
 */
export function toArray<T> (head: LNode<T>): T[] {
  const res: T[] = []

  let current: LNode<T> | undefined = head
  while (current != null) {
    res.push(current.value)
    current = current.next
  }

  return res
}
