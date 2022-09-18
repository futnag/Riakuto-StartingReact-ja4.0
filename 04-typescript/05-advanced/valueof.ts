{
  const permissions = {
    r: 0b100,
    w: 0b010,
    x: 0b001,
  } as const;

  type ValueOf<T> = T[keyof T];
  type PermNum = ValueOf<typeof permissions>; // 1 | 2 | 4
}

// 配列の要素から型を作る
const species = ["rabbit", "bear", "fox", "dog"] as const;
// type Species = "rabbit" | "bear" | "fox" | "dog"
type Species = typeof species[number];
