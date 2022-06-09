import BTree from '@/std/collections/BTree'
import printInOrder from '@/btrees/traversal'

test('printInOrder', () => {
  const root = new BTree(30)
  root.left = new BTree(24)
  root.right = new BTree(45)

  root.left.root = root
  root.right.root = root

  root.left.left = new BTree(12)
  root.left.right = new BTree(17)

  root.left.left.root = root.left
  root.left.right.root = root.left

  root.right.left = new BTree(69)
  root.right.right = new BTree(72)

  root.right.left.root = root.right
  root.right.right.root = root.right

  root.left.left.left = new BTree(6)
  root.left.left.left.root = root.left.left

  root.left.left.left.left = new BTree(4)
  root.left.left.left.right = new BTree(2)

  root.left.left.left.left.root = root.left.left.left
  root.left.left.left.right.root = root.left.left.left

  const res = printInOrder(root)
  expect(res).toEqual([4, 6, 2, 12, 24, 17, 30, 69, 45, 72])
})
