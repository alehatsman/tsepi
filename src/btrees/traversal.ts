import BTree from "@/btrees/BTree";

function printInOrder<T>(btree: BTree<T>): T[] {
  let current: BTree<T> | undefined = btree;
  let leftDone = false;

  const res = [];

  while (current) {
    if (!leftDone) {
      while (current.left) {
        current = current.left;
      }
    }

    res.push(current.value);

    leftDone = true;

    if (current.right) {
      leftDone = false;
      current = current.right;
    } else if (current.root) {
      while (current.root && current === current.root.right) {
        current = current.root;
      }

      if (!current.root) {
        break;
      }

      current = current.root;
    } else {
      break;
    }
  }

  return res;
}

export default printInOrder;
