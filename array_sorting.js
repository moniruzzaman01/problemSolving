const array = [17, 2, 5, 19, 15, 18, 21, 25, 22, 27, 12];

// process 1
function sorting1(array) {
  array.sort((a, b) => {
    return a - b;
  });
  return array;
}
// console.log(array);
// console.log(sorting1(array));

// process 2
function sorting2(array) {
  console.log("main", array);
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        // ----------------------type 1------------
        // [array[i], array[j]] = [array[j], array[i]];
        // ----------------------type 2------------
        // array[i] = array[i] + array[j];
        // array[j] = array[i] - array[j];
        // array[i] = array[i] - array[j];
        // ----------------------type 3------------
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
}
sorting2(array);
