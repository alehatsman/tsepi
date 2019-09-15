import map from './map'

/**
 * Creates new array by joining each element from first
 * array with corresponding element from second array.
 * @param arr1 - first array
 * @param arr2 - second array
 *
 * @returns array - array of arrays of size 2.
 */
function zip<A, B>(arr1: A[], arr2: B[]) {
  return map((v, i) => {
    return [v, arr2[i]]
  }, arr1)
}

export default zip
