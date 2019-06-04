import { forEach } from "@/std";
import filter from "@/std/filter";

test("filter", () => {
  const testCases = [
    {
      coll: [],
      pred: (_: any) => false,
      res: [],
    },
    {
      coll: [1, 2, 3, 4],
      pred: (x: number) => x % 2 === 0,
      res: [2, 4],
    },
    {
      coll: [1, 2, 3, 4],
      pred: (x: number) => x % 2 !== 0,
      res: [1, 3],
    },
  ];

  forEach(({ coll, pred, res }) => {
    expect(filter(pred, coll)).toEqual(res);
  }, testCases);
});
