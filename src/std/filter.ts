import { forEach } from "@/std";

type Pred<T> = (x: T) => boolean;

function filter<T>(pred: Pred<T>, coll: T[]): T[] {
  const res = [] as T[];
  forEach((x) => {
    if (pred(x)) {
      res.push(x);
    }
  }, coll);
  return res;
}

export default filter;
