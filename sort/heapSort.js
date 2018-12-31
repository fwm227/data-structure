/*
* heap sort demo
*/
require('./common.js');
function heapSort (arr, callback) {
  var heapSize = arr.length;
  buildHeap(arr);
  // sort and adjust
  while (heapSize > 0) {
    heapSize--;
    callback(arr[0]);
    Array.prototype.swap.call(arr, 0, heapSize);
    heapAdjust(arr, heapSize, 0);
  }
}

// build heap
function buildHeap (arr) {
  var heapSize = arr.length;
  for (var i = Math.floor(heapSize / 2); i >= 0; i--) {
    heapAdjust(arr, heapSize, i);
  }
}

// adjust heap
function heapAdjust (arr, heapSize, i) {
  var largest = i,
  left = 2 * i + 1,
  right = 2 * i + 2;
  // find largest
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  // execute adjust
  if (i !== largest) {
    Array.prototype.swap.call(arr, i, largest);
    heapAdjust (arr, heapSize, largest);
  }
}

var arr = [6, 1, 3, 5, 4, 2, 7];
heapSort(arr, function (key) {
  console.log(key);
})
