/*
* selection sort demo
 */
require('./common.js');
Array.prototype.selectionSort = function (type) {
  var flagIdx;
  for (var i = 0; i < this.length; i++) {
    flagIdx = i;
    for (var j = i + 1; j < this.length; j++) {
      if (type === 0) {
        if (this[flagIdx] > this[j]) {
          flagIdx = j;
        }
      } else if (type === 1) {
        if (this[flagIdx] < this[j]) {
          flagIdx = j;
        }
      }
    }
    Array.prototype.swap.call(this, i, flagIdx);
  }
}
var arr = [1, 3, 2, 5, 0];
arr.selectionSort(0);
console.log(arr);
