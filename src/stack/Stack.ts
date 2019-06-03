import LinkedList from "@/lists/LinkedList";

export default class Stack<T> {
  private ll: LinkedList<T>;

  constructor() {
    this.ll = new LinkedList();
  }

  public push(value: T) {
    this.ll.prepend(value);
  }

  public pop(): T {
    if (!this.ll.head) {
      throw new Error("StackIsEmptyError");
    }

    const value = this.ll.head.value;
    this.ll.remove(0);
    return value;
  }
}
