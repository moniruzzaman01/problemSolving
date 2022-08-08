// type 1
function getLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      // console.log("true", arr[i], ">", largest);
      largest = arr[i];
    }
  }
  console.log(largest);
}

const array = [17, 2, 5, 19, 15, 18, 21, 25, 22, 27, 12];
// getLargest(array);

// type 2
function getLargest1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        // ------------sort the array------------
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array[array.length - 1];
}
console.log(getLargest1(array));
