interface User {
  name: string;
}
interface User {
  age: number;
}
interface User {
  species: "rabbit" | "bear" | "fox" | "dog";
}

const rolley: User = {
  name: "Rolley Cocker",
  age: 8,
  species: "dog",
};
console.log(rolley);

/*
Declaretion Merging
宣言のマージ

再宣言ではない
User インタフェースにあとからプロパティを追加している

拡張性と厳密性のバランスを考えて、
拡張性が必要ならばインタフェースを、
厳密性が必要ならば型エイリアスを用いるのがいい
*/
