/*
* bubble sort Demo
 */
// init swap in array prototype
Array.prototype.swap = function (arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
function bubbleSort (arr, type) {
  for (var i = 0; i < arr.length-1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      // type 0 indicates that is from smallest to lagest,1 indicates reverse mean
      if (type === 0) {
        if (arr[i] > arr[j]) {
          Array.prototype.swap(arr, i, j);
        }
      } else if (type === 1) {
        if (arr[i] < arr[j]) {
          Array.prototype.swap(arr, i, j);
        }
      }
    }
  }
}

var arr = [5, 2, 1, 3];
bubbleSort(arr, 0);
console.log(arr);