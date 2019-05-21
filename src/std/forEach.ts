export default function forEach<A>(func: (x: A) => void, coll: A[]): void {
  for (const x of coll) {
    func(x);
  }
}
