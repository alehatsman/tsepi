type Pred<T> = (x: T, i: number) => boolean;

function filter<T>(pred: Pred<T>, coll: T[]): T[] {
  const res = [] as T[];
  for (let i = 0; i < coll.length; i += 1) {
    const x = coll[i];
    if (pred(x, i)) {
      res.push(x);
    }
  }
  return res;
}

export default filter;
