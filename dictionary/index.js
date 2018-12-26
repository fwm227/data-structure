/*
* simple dictionary demo provided to graph invoked
* execute environment is Node
*/
function Dictionary () {
  var list = {};
  this.set = function (key, value) {
    list[key] = value;
  }

  this.get = function (key) {
    return list[key];
  }

  this.print = function () {
    console.log(list);
  }
}

module.exports =  Dictionary;
