/*
* fast sort
*/
require('./common.js');
function quickSort (arr, left, right) {
  var index = partition(arr, left, right);
  if (left < right) {
      quickSort(arr, left, index - 1);
      quickSort(arr, index, right);
  }
}

function partition (arr, left, right) {
  var pivot = arr[Math.floor((left + right) / 2)];
  var l = left;
  var h = right;
  while (l < h) {
    while (l < h && arr[l] < pivot) {
      l++;
    }
    while (l < h && arr[h] > pivot) {
      h--;
    }
    Array.prototype.swap.call(arr, l, h);
    l++;
    h--;
  }
  return l;
}

var arr = [6, 3, 1, 0];
/*for (var i = 0; i < 15; i++) {
  arr.push(Math.ceil((Math.random() * 100)));
}*/
quickSort(arr, 0, arr.length - 1);
console.log(arr);
