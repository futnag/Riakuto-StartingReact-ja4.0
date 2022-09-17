const list = [4, 8, 2, 6];
// sort, reverse は破壊的操作なので、注意

// 非破壊的ソート（slice でコピーする）
const sortedList = list.slice().sort((n, m) => (n < m ? -1 : 1));
console.log(sortedList, list);

// 非破壊的ソート（スプレッド構文でコピーする）
const reverseList = [...list].reverse();
console.log(reverseList, list);
