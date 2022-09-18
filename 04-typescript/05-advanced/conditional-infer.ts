{
  type Each<T> = T extends Array<infer U> ? U : T;

  const num = 5;
  const arr = [3, 6, 9];
  type A = Each<typeof arr>;
  type N = Each<typeof num>;
}

/*

infer

条件付き型における型のマッチングで、そのマッチング中に取得した型を出力にも利用する
上記の例
型 T が何らかの型の配列だった場合、その配列の中身の型を infer U で型 U として取得し、
出力の型として用いる。
配列ではなかった場合は、そのままその型が出力される

*/
