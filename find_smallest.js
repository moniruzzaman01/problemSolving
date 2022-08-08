function getsmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      console.log("true", arr[i], ">", smallest);
      smallest = arr[i];
    }
  }
  console.log(smallest);
}

const array = [20, 30, 10, 1, 50, 70, 40, 5];
// getsmallest(array);

// type 2
function getSmallest1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        // ------------sort the array------------
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array[0];
}
console.log(getSmallest1(array));
