let arr = [9, 3, 1, 2, 3, 1, 7, 2, 9, 8, 5];

arr.sort();
let unique_arr = [arr[0]];
// unique_arr.push(arr[0]);

for (let i = 0; i < arr.length; i++) {
  if (unique_arr.includes(arr[i])) {
    continue;
  }
  unique_arr.push(arr[i]);
}
console.log("given array", arr);
console.log("unique array", unique_arr);
