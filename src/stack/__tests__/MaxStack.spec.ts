import MaxStack from "@/stack/MaxStack";
import { forEach, zip } from "@/std";

describe("MaxStack", () => {
  it("should support basic operations", () => {
    const stack = new MaxStack();

    for (let i = 0; i <= 100; i += 1) {
      stack.push(i);
    }

    for (let i = 100; i >= 0; i -= 1) {
      expect(stack.max()).toBe(i);
      expect(stack.pop()).toBe(i);
    }
  });

  it("should support max list", () => {
    const stack = new MaxStack();

    const stackValues = [7, 1, 2, 3, 9];
    const maxValues =   [7, 7, 7, 7, 9];

    forEach((v) => stack.push(v), stackValues);

    const vmPairs = zip(stackValues, maxValues);

    forEach((_, i) => {
      const max = stack.max();
      const v = stack.pop();
      const ix = maxValues.length - 1 - i;

      expect(v).toEqual(vmPairs[ix][0]);
      expect(max).toEqual(vmPairs[ix][1]);
    }, stackValues);
  });
});
