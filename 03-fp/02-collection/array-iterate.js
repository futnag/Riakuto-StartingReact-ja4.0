const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.map((n) => n * 3)); // [ 3,  6,  9, 12, 15, 18, 21, 24, 27 ]
console.log(arr.filter((n) => n % 3 === 0)); // [ 3, 6, 9 ]
console.log(arr.find((n) => n > 4)); // 5
console.log(arr.findIndex((n) => n > 4)); // 4
console.log(arr.every((n) => n !== 0)); // true
console.log(arr.some((n) => n >= 10)); // false
