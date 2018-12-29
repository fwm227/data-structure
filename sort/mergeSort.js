/*
* merge sort demo
 */
function merge (left, right) {
  var res = [];
  var lidx = 0;
  var ridx = 0;
  while(lidx < left.length && ridx < right.length) {
    if (left[lidx] < right[ridx]) {
      res.push(left[lidx++]);
    } else if (left[lidx] > right[ridx]) {
      res.push(right[ridx++]);
    }
  }
  while (lidx < left.length) {
    res.push(left[lidx++]);
  }
  while (ridx < right.length) {
    res.push(right[ridx++]);
  }
  return res;
}
function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

var arr = [];
for (var i = 0; i < 5; i++) {
  arr.push(Math.ceil((Math.random() * 100)));
}
console.log(mergeSort(arr));
