const str = "Hey Moniruzzaman Shakib";
const arr = [1, 2, 3, 4, 5];

function strReverse(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
}
strReverse(str);

function arrReverse(arr) {
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  console.log(reverseArr);
}
arrReverse(arr);
