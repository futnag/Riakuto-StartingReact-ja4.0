class Point {
  x: number = 0;
  y: number = 0;
}

const pointA = new Point();
const pointB: Point = { x: 2, y: 4 };

interface Point3d extends Point {
  z: number;
}

const pointC: Point3d = { x: 5, y: 5, z: 10 };

console.log(pointA);
console.log(pointB);
console.log(pointC);

/*
TypeScript でクラスを定義すると、実際には２つの宣言が同時に実行される。
1．そのクラスインスタンスのインタフェース宣言
2. コンストラクタ関数の宣言

上記の例では、Point は型の文脈においてはインタフェースとして扱われる
通常のコンテキストではコンストラクタ関数として扱われる
*/
