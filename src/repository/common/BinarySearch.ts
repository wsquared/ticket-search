export const binarySearch = (array: any[], target: number): number => {
  let left = 0;
  let right = array.length;

  while (left < right) {
    let pivot = left + Math.floor((right - left) / 2);

    if (array[pivot].id === target) {
      return pivot;
    } else if (array[pivot].id > target) {
      right = pivot;
    } else {
      left = pivot + 1;
    }
  }

  return -1;
};
