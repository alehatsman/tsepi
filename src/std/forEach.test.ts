import forEach from "./forEach";

test("forEach", () => {
  const mockFn = jest.fn((x) => x);
  forEach(mockFn, [1, 2, 3]);
  expect(mockFn.mock.calls.length).toBe(3);
});
