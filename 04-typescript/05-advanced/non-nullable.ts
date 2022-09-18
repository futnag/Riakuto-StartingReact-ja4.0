{
  type T1 = NonNullable<string | number | undefined>;
  type T2 = NonNullable<number[] | null | undefined>;

  const arr1: T1 = undefined;
  const arr2: T2 = null;
}
