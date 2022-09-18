{
  function toArray<T>(arg1: T, arg2: T) {
    return [arg1, arg2];
  }

  const n = toArray<number>(8, 3);
  console.log(n);

  const s = toArray<string>("foo", "bar");
  console.log(s);

  const toArrayArrow = <T>(arg1: T, arg2: T) => [arg1, arg2];

  const b = toArrayArrow(true, false);
  console.log(b);

  // 型エラー
  const e = toArrayArrow(5, "baz");
  console.log(e);

  // 可変長引数
  const toArrayVariably = <T>(...args: T[]): T[] => [...args];
  const nums = toArrayVariably(1, 2, 3, 4, 5);
  console.log(nums);

  // 型エラー
  const err = toArrayVariably(4, "5", "6", false);
  console.log(err);
}
