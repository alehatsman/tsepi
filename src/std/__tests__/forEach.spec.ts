import forEach from "@/std/forEach";

describe("forEach", () => {
  it("should iterate over collection", () => {
    const mockFn = jest.fn((x) => x);
    forEach(mockFn, [1, 2, 3]);
    expect(mockFn.mock.calls.length).toBe(3);
  });

  it("should stop if explicitly returned false", () => {
    const mockFn = jest.fn((x) => {
      if (x === 2) {
        return false;
      }
      return true;
    });
    forEach(mockFn, [1, 2, 3]);
    expect(mockFn.mock.calls.length).toBe(2);
  });
});
