/*
* insertion sort demo
 */
Array.prototype.insertionSort = function () {
  var temp;
  for (var i = 0; i < this.length; i++) {
    temp = this[i];
    for (var j = i; j > 0 && this[j-1] > temp; j--) {
      this[j] = this[j-1];
    }
    this[j] = temp;
  }
}

var arr = [6, 2, 0, 1, 5];
arr.insertionSort();
console.log(arr);
