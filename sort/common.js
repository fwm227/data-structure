/*
* common module
 */
Array.prototype.swap = function (idx1, idx2) {
  var temp = this[idx1];
  this[idx1] = this[idx2];
  this[idx2] = temp;
}
