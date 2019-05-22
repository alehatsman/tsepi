export default class LNode<T> {
  public value: T;
  public next?: LNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}
