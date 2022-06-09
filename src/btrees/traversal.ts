import BTree from '@/btrees/BTree'

function printInOrder<T> (btree: BTree<T>): T[] {
  let current: BTree<T> | null = btree
  let leftDone = false

  const res = []

  while (current) {
    if (!leftDone) {
      while (current.left != null) {
        current = current.left
      }
    }

    res.push(current.value)

    leftDone = true
    if (current.right != null) {
      leftDone = false
      current = current.right
    } else if (current.root != null) {
      while ((current.root != null) && current === current.root.right) {
        current = current.root
      }

      if (current.root == null) {
        break
      }

      current = current.root
    } else {
      break
    }
  }

  return res
}

export default printInOrder
