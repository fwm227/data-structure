/*
* binary-search for sorted array
*/

Array.prototype.binarySearch = function (key) {
  var low = 0, height = this.length - 1, mid;
  while (low <= height) {
    mid = Math.floor((low + height) / 2);
    if (this[mid] > key) {
      height = mid - 1;
    } else if (this[mid] < key) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.binarySearch(5));