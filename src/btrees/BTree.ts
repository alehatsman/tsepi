export default class BTree<T> {
  public value: T
  public root: BTree<T> | undefined
  public left: BTree<T> | undefined
  public right: BTree<T> | undefined

  constructor(value: T) {
    this.value = value
  }
}
