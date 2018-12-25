/*
push(element(s)) ：添加一个（或几个）新元素到栈顶。
pop()：移除栈顶的元素，同时返回被移除的元素。
peek() ：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返
回它）。
isEmpty() ：如果栈里没有任何元素就返回 true ，否则返回 false 。
clear()：移除栈里的所有元素。
size()：返回栈里的元素个数。这个方法和数组的 length 属性很类似 */

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
  this.peek = function () {
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