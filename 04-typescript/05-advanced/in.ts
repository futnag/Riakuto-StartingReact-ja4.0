const obj = { a: 1, b: 2, c: 3 };
console.log("a" in obj); // true
for (const key in obj) {
  console.log(key);
} // a b c

type Fig = "one" | "two" | "three";
type FigMap = { [key in Fig]?: number };

const figMap: FigMap = {
  one: 1,
  two: 2,
  three: 3,
};
// figMap.four = 4; // コンパイルエラー

type SystemSupportLanguage = "en" | "fr" | "it" | "es";

type Butterfly = {
  [key in SystemSupportLanguage]: string;
};
