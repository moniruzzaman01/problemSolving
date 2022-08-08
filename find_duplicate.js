let arr = [5, 2, 2, 3, 2, 5];

let duplicate_data = [];

for (let i = 0; i < arr.length; i++) {
  const prev = arr[i];
  for (let j = i + 1; j < arr.length; j++) {
    if (prev === arr[j]) {
      !duplicate_data.includes(prev) && duplicate_data.push(prev);
    }
  }
}
console.log("given array", arr);
console.log("duplicate data", duplicate_data);
