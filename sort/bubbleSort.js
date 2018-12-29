/*
* bubble sort Demo
 */
require('./common.js');
// init swap in array prototype
Array.prototype.bubbleSort = function (type) {
  for (var i = 0; i < this.length-1; i++) {
    for (var j = 0; j < this.length-1-i; j++) {
      // type 0 indicates that is from smallest to lagest,1 indicates reverse mean
      if (type === 0) {
        if (this[j] > this[j + 1]) {
          Array.prototype.swap.call(this, j, j + 1);
        }
      } else if (type === 1) {
        if (this[j] < this[j + 1]) {
          Array.prototype.swap.call(this, j, j + 1);
        }
      }
    }
  }
}

var arr = [5, 2, 1, 3];
arr.bubbleSort(0);
console.log(arr);