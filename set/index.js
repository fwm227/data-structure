/*add(value) ：向集合添加一个新的项。
delete(value) ：从集合移除一个值。
has(value) ：如果值在集合中，返回 true ，否则返回 false 。
clear() ：移除集合中的所有项。
size() ：返回集合所包含元素的数量。与数组的 length 属性类似。
values() ：返回一个包含集合中所有值的数组。*/

function Set () {
  let setList = {};
  // add into set
  this.add = function (item) {
    if (!this.has(item)) {
      setList[item] = item;
    }
  }
  // delete set item
  this.delete = function (item) {
    if (this.has(item)) {
      delete setList[item];
    }
  }
  // judge set has value
  this.has = function (item) {
    return setList.hasOwnProperty(item)
  }
  // clear set
  this.clear = function () {
    setList = {};
  }
  // get set size
  this.size = function () {
    return Object.keys(setList).length;
  }
  // get set values
  this.values = function () {
    let values = [], keyList = Object.keys(setList);
    for (let i = 0; i < keyList.length; i++) {
      values.push(setList[keyList[i]]);
    }
    return values;
  }
  // print set
  this.print = function () {
    console.log(setList);
  }
}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.delete(1);
set.print();
// get set size
console.log(set.size());
// get values
console.log(set.values());
// clear set
set.clear();
set.print();
