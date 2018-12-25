/*
* stack Demo
*/
function Stack () {
  var arrData = [];

  this.push = function (item) {
    Array.prototype.push.call(arrData, item);
  }

  this.pop = function () {
    return Array.prototype.pop.call(arrData);
  }
  // get stack top data
  this.getTop = function () {
    return arrData[this.size - 1];
  }

  this.isEmpty = function () {
    return this.size === 0;
  }

  this.clear = function () {
    arrData = [];
  }

  this.size = function () {
    return arrData.length;
  }

  this.print = function () {
    console.log(arrData);
  }
}

var stack = new Stack();
/*stack.push(1);
stack.push(2);
stack.push(3);
stack.print();*/

module.exports = Stack;