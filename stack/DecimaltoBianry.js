/*
* decimal transform to binay by stack way
 */
var Stack = require('./index.js');

function Transform (number) {
  var result = new Stack();
  while (number) {
    remin = number % 2;
    result.push(remin);
    number = parseInt(number / 2);
  }
  var length = result.size();
  for (var i = 0; i < length; i++) {
    console.log(result.pop());
  }
}

Transform(10);
