// function FizzBuzz(num) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     return 'fizzbuzz';
//   }
//   else if (num % 3 == 0) {
//     return 'fizz';
//   }
//   else if (num % 5 == 0) {
//      return 'buzz';  
//   }
//   else {
//     return num;
//   }
// };

function FizzBuzz() {}

FizzBuzz.prototype.play = function(num) {
  if (this._isDivisibleBy(15, num)) {
    return "fizzbuzz";
  } else if (this._isDivisibleBy(5, num)) {
    return "buzz";
  } else if (this._isDivisibleBy(3, num)) {
    return "fizz";
  } else {
    return num;
  }
};

FizzBuzz.prototype._isDivisibleBy = function(testNumber, num) {
  return num % testNumber === 0;
};