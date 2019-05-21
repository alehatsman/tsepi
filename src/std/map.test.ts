import map from "./map";

test("map", () => {
  const testCases = [
    {
      coll: [1, 2, 3],
      func: (x: number) => x + 1,
      res: [2, 3, 4],
    },
    {
      coll: [1, 2, 3],
      func: (x: number) => x * x,
      res: [1, 4, 9],
    },
  ];

  testCases.forEach((testCase) => {
    expect(testCase.res).toEqual(map(testCase.func, testCase.coll));
  });
});
