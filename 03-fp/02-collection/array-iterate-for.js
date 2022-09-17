const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((n) => {
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  }
});

for (const n of arr) {
  if (n % 2 !== 0) {
    console.log(`${n} is odd`);
  }
}

// こっちのほうがいいかも
arr.filter((e) => e % 2 === 0).map((e) => console.log(`${e} is even`));
arr.filter((e) => e % 2 !== 0).map((e) => console.log(`${e} is odd`));

const arr2 = [10, 20, 30];

// index
for (const i in arr2) {
  console.log(arr[i]); // 1 2 3
}

// element
for (const e of arr2) {
  console.log(e); // 10, 20, 30
}
