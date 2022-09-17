const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((n, m) => n + m));

console.log(arr.sort((n, m) => (n > m ? -1 : 1)));

// sort は破壊的メソッドなので、元の配列を変更してしまう
console.log(arr);
