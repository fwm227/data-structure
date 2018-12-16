/*add(value)： 向集合添加一个新的项。
delete(value)： 从集合移除一个值。
has(value)： 如果值在集合中，返回 true ，否则返回 false 。
clear()： 移除集合中的所有项。
size()： 返回集合所包含元素的数量。与数组的 length 属性类似。
values()： 返回一个包含集合中所有值的数组。
nuion: 并集
intersection: 交集
complement: 补集
isSubset: 判断是否是子集*/
function Set () {
  this.setList = {};
  // add into set
  this.add = function (item) {
    if (!this.has(item)) {
      this.setList[item] = item;
    }
  }
  // delete set item
  this.delete = function (item) {
    if (this.has(item)) {
      delete this.setList[item];
    }
  }
  // judge set has value
  this.has = function (item) {
    return this.setList.hasOwnProperty(item)
  }
  // clear set
  this.clear = function () {
    this.setList = {};
  }
  // get set size
  this.size = function () {
    return Object.keys(this.setList).length;
  }
  // get set values
  this.values = function () {
    let values = [], keyList = Object.keys(this.setList);
    for (let i = 0; i < keyList.length; i++) {
      values.push(this.setList[keyList[i]]);
    }
    return values;
  }
  this.union = function (set) {
    let keys = Object.keys(set.setList);
    for (let i = 0; i < keys.length; i++) {
      this.add(set.setList[keys[i]]);
    }
  }
  this.intersection = function (set) {
    let interSet = new Set();
    let keys = Object.keys(set.setList);
    for (let i = 0; i < keys.length; i++) {
      if (this.has(set.setList[keys[i]])) {
        interSet.add(set.setList[keys[i]]);
      }
    }
    return interSet.setList;
  }
  this.differenct = function (set) {
    let compSet = new Set();
    let keys = Object.keys(this.setList);
    for (let i = 0; i < keys.length; i++) {
      if (!set.has(this.setList[keys[i]])) {
        compSet.add(this.setList[keys[i]])
      }
    }
    return compSet.setList;
  }
  this.isSubset = function (set) {
    if (this.size() < set.size()) {
      return false;
    } else {
      let keys = Object.keys(set.setList);
      for (let i = 0; i < keys.length; i++) {
        if (!this.has(set.setList[keys[i]])) {
          return false;
        }
      }
      return true;
    }
  }
  // print set
  this.print = function () {
    console.log(this.setList);
  }
}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.delete(1);
// set.print();
// get set size
// console.log(set.size());
// get values
// console.log(set.values());
const set2 = new Set();
set2.add(2);
set2.add(7);
set2.add(8);
// set.union(set2);
// console.log(set.intersection(set2));
// console.log(set.differenct(set2));
console.log(set.isSubset(set2));
// set.print();
// clear set
// set.clear();
// set.print();
