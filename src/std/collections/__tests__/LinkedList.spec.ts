import { LinkedList, LNode, fromArray } from '@/std/collections/LinkedList'

describe('LinkedList', () => {
  test('toArray', () => {
    const ll = new LinkedList()
    ll.head = new LNode(1)
    ll.head.next = new LNode(2)
    ll.head.next.next = new LNode(3)

    expect([1, 2, 3]).toEqual(ll.toArray())
  })

  test('insert', () => {
    const ll = new LinkedList()
    ll.insert(1, 0)
    expect([1]).toEqual(ll.toArray())
    ll.insert(2, 1)
    expect([1, 2]).toEqual(ll.toArray())
  })

  test('prepend', () => {
    const ll = new LinkedList()
    ll.prepend(1)
    expect([1]).toEqual(ll.toArray())
    ll.prepend(2)
    expect([2, 1]).toEqual(ll.toArray())
  })

  test('append', () => {
    const ll = new LinkedList()
    ll.append(1)
    expect([1]).toEqual(ll.toArray())
    ll.append(2)
    expect([1, 2]).toEqual(ll.toArray())
    ll.append(3)
    expect([1, 2, 3]).toEqual(ll.toArray())
  })

  test('last', (done) => {
    const ll = new LinkedList()
    ll.append(1)
    ll.append(2)
    ll.append(3)
    const last = ll.last()
    if (last == null) {
      done.fail()
      return
    }
    expect(3).toEqual(last.value)
    done()
  })

  test('index', (done) => {
    const ll = new LinkedList()
    ll.append(1)
    ll.append(2)
    ll.append(3)

    const n0 = ll.index(0)
    if (n0 == null) {
      done.fail()
      return
    }
    expect(1).toEqual(n0.value)

    const n1 = ll.index(1)
    if (n1 == null) {
      done.fail()
      return
    }
    expect(2).toEqual(n1.value)

    const n2 = ll.index(2)
    if (n2 == null) {
      done.fail()
      return
    }

    expect(3).toEqual(n2.value)
    done()
  })
})

test('fromArray', () => {
  const ll = fromArray([1, 2, 3])

  if (ll.head != null) {
    expect(ll.head.value).toBe(1)
  }
})
