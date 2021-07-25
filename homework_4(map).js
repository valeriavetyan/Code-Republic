// Task 1. Implement Array.prototype.map function in JavaScript
Array.prototype.qartez = function callback(currentValue) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    let result = currentValue(this[i]);
    arr.push(result);
  }
  return arr;
};

let example = [2, 3, 4, 5];
example = example.qartez(function (num) {
  return num * 10
});
console.log(example); // [ 20, 30, 40, 50 ]


// Task 2.1(Tuck in Array)
function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]]
}


// Task 2.2(Remove Trailing and Leading Zeros)
function removeLeadingTrailing(n) {
  let num = Number(n)
  let parsedNum = parseFloat(num)
  let strNum = parsedNum.toString()
  return strNum
}
