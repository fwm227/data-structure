/*
* decimal transform to binay by stack way
 */
var Stack = require('./index.js');

function Transform (number) {
  let result = new Stack();
  while (number) {
    remin = number % 2;
    console.log(remin);
    result.push(remin);
    number = parseInt(number / 2);
  }
  console.log(result.print());
}

Transform(10);
