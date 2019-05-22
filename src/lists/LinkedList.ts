import LNode from "./Node";

export default class LinkedList<T> {
  public head?: LNode<T>;

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
  public insert(value: T, position: number) {
    const newNode = new LNode(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    if (!this.head) {
      throw new Error("index out of range error");
    }

    let i = 0;
    let current: LNode<T> | undefined = this.head;
    let prev: LNode<T> = current;
    while (current && i < position) {
      i += 1;
      prev = current;
      current = current.next;
    }

    prev.next = newNode;
    newNode.next = current;
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
  public prepend(value: T) {
    this.insert(value, 0);
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
  public append(value: T) {
    const newNode = new LNode(value);
    const lastNode = this.last();
    if (!lastNode) {
      this.head = newNode;
      return;
    }
    lastNode.next = newNode;
  }

  public remove(position: number) {
    if (!this.head) {
      throw new Error("No head");
    }

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    const node = this.index(position);
    if (node && node.next) {
      node.next = node.next.next;
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
  public index(position: number): LNode<T> | undefined {
    if (position === 0) {
      return this.head;
    }

    let i = 0;
    let current = this.head;
    if (!current) {
      throw new Error("Index out of range");
    }

    while (i < position) {
      i += 1;
      if (!current.next) {
        break;
      }
      current = current.next;
    }

    return current;
  }

  /**
   * returns last elements
   *
   * Performance:
   * Time: O(N)
   * Space: O(1)
   */
  public last(): LNode<T> | undefined {
    let current = this.head;

    if (!current) {
      return;
    }

    while (current && current.next) {
      current = current.next;
    }

    return current;
  }

  /**
   * returns array with values from list
   *
   * Performance:
   * Time: O(N)
   * Space: O(N)
   */
  public toArray(): T[] {
    let current = this.head;
    const res: T[] = [];

    while (current) {
      res.push(current.value);
      current = current.next;
    }

    return res;
  }
}
