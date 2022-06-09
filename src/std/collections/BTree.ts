export default class BTree<T> {
  public value: T
  public root: BTree<T> | null
  public left: BTree<T> | null
  public right: BTree<T> | null

  constructor (value: T) {
    this.value = value
    this.root = null
    this.left = null
    this.right = null
  }
}
