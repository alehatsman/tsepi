import { forEach } from "../std";
import binarySearch from "./binarySearch";

test("binarySearch", () => {
  const testCases = [
    {
      input: [],
      item: 1,
      result: -1,
    },
    {
      input: [1],
      item: 1,
      result: 0,
    },
    {
      input: [1, 2],
      item: 1,
      result: 0,
    },
    {
      input: [1, 2],
      item: 2,
      result: 1,
    },
    {
      input: [1, 2, 3],
      item: 3,
      result: 2,
    },
    {
      input: [1, 2, 3, 4],
      item: 3,
      result: 2,
    },
  ];

  forEach((testCase) => {
    expect(testCase.result)
      .toEqual(binarySearch(
        testCase.input,
        testCase.item,
      ));
  }, testCases);
});
