import { map } from "@/std";

function zip<A, B>(arr1: A[], arr2: B[]) {
  return map((v, i) => {
    return [v, arr2[i]];
  }, arr1);
}

export default zip;
