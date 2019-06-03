import rearrange from "@/arrays/rearrange";
import { forEach } from "@/std";

test("rearrange", () => {
  const testCases = [
    {
      array: [1, 7, 6, 4, 3, 8, 9, 4, 2],
      index: 3,
      result: [1, 2, 3, 4, 4, 9, 8, 6, 7],
    },
    {
      array: [5, 4, 3, 2, 1],
      index: 2,
      result: [1, 2, 3, 4, 5],
    },
  ];

  forEach((testCase) => {
    rearrange(testCase.array, testCase.index),
      expect(testCase.result).toEqual(testCase.array);
  }, testCases);
});
