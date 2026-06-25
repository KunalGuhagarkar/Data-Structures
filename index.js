function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];
    if (guess === item) {
      return `Found at index ${mid}`;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 9));
