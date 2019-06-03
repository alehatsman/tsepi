import { memo } from "@/std";

test("memo", () => {
  const testFn = memo((x: string) => `Hello ${x}`);
  expect(testFn("Aleh")).toEqual("Hello Aleh");
});
