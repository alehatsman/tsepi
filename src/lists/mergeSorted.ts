import { LNode } from '@/std/collections/LinkedList'

/**
 * Merges two sorted linked lists and creates a new linked list.
 *
 * Performance:
 * Time: O(N)
 * Space: O(N)
 */
function mergeSorted<T> (head1: LNode<T>, head2: LNode<T>): LNode<T> {
  let cur1: LNode<T> | undefined = head1
  let cur2: LNode<T> | undefined = head2

  const res = {} as LNode<T>
  let cr = res

  while ((cur1 != null) || (cur2 != null)) {
    if ((cur1 != null) && (cur2 != null)) {
      if (cur1.value <= cur2.value) {
        cr.next = new LNode(cur1.value)
        cr = cr.next
        cur1 = cur1.next
      } else {
        cr.next = new LNode(cur2.value)
        cr = cr.next
        cur2 = cur2.next
      }
    } else if (cur1 != null) {
      cr.next = new LNode(cur1.value)
      cr = cr.next
      cur1 = cur1.next
    } else if (cur2 != null) {
      cr.next = new LNode(cur2.value)
      cr = cr.next
      cur2 = cur2.next
    }
  }

  return res.next as LNode<T>
}

export default mergeSorted
