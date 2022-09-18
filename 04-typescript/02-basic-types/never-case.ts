const greet = (friend: "Serval" | "Caracal" | "Cheetah") => {
  switch (friend) {
    case "Serval":
      return `Hello, ${friend}!`;
    case "Caracal":
      return `Hi, ${friend}!`;
    case "Cheetah":
      return `Hiya, ${friend}!`;
    default: {
      // const check: never = friend;
      throw new ExhaustiveError(friend);
    }
  }
};

console.log(greet("Serval"));

/*

never の特性
- 何も代入できない
- 何にでも代入できる
- 常に例外を起こす関数の戻り値に使える
- void とは異なる

到達不能、表か不能であることを表現するための型

## void と never の違い
void: 戻り値はなく、return されるか、最後まで実行される
never: 戻り値はなく、中断されるか、永遠に実行される

## 主な用途

1. 網羅性チェック
  union 型を用いた分岐処理を実装する際に、すべてのパターンを網羅できているかを確認するために
  default 句の中で never 型への代入を行う

2. 例外による網羅性チェック
  下記、ExhaustiveError を default 句で投げる

  例外を用いる利点
  1. noUnusedLocals に対応する
  2. 実行時を意識したコードになる


*/

// () => never
const throwError = (): never => {
  throw new Error();
};

// () => never
const forever = (): never => {
  while (true) {}
};

// type NumberString = never
type NumberString = number & string;

class ExhaustiveError extends Error {
  constructor(value: never, message = `Unsupported type: ${value}`) {
    super(message);
  }
}
