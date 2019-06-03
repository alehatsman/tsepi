import parity from "@/primitives/parity";
import { forEach } from "@/std";

test("parity", () => {
  const testCases = [
    { input: 0, output: 0 },
    { input: 1, output: 1 },
    { input: 2, output: 1 },
    { input: 3, output: 0 },
  ];

  forEach((testCase) => {
    expect(parity(testCase.input)).toBe(testCase.output);
  }, testCases);
});
