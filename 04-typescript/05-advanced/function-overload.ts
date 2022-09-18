class Brooch {
  pentagram = "Silver Crystal";
}

interface Compact {
  silverCrystal: boolean;
}

class CosmicCompact implements Compact {
  silverCrystal = true;
  cosmicPower = true;
}

class CrisisCompact implements Compact {
  silverCrystal = true;
  moonChalice = true;
}

function transform(): void;
function transform(item: Brooch): void;
function transform(item: Compact): void;
function transform(item?: Brooch | Compact): void {
  if (item instanceof Brooch) {
    console.log("Moon crystal power💎, make up!!");
  } else if (item instanceof CosmicCompact) {
    console.log("Moon cosmic power💖, make up!!!");
  } else if (item instanceof CrisisCompact) {
    console.log("Moon crisis🏆, make up!");
  } else if (!item) {
    console.log("Moon prisim power🌙, make up!");
  } else {
    console.log("Item is fake...😖");
  }
}

transform();
transform(new Brooch());
transform(new CosmicCompact());
transform(new CrisisCompact());

// 上記の例では、関数定義の全てのパターンで返り値が void なので、最後の宣言だけでも同様に動作する
// 入力する型に応じて、出力する型を変えるためには、複数の関数宣言が必要
function increment(str: string): string;
function increment(num: number): number;
function increment(num: number, added: number): number;
function increment(val: string | number, added?: number): string | number {
  if (typeof val === "string") {
    return "NaN";
  } else if (typeof val === "number") {
    if (typeof added !== "undefined") {
      return val + added;
    }
    return ++val;
  }
  return val;
}
// const result1: string
const result1 = increment("1"); // NaN
console.log(result1);

// const result2: number
const result2 = increment(1); // 2
console.log(result2);

// const result3: number
const result3 = increment(1, 2); // 3
console.log(result3);
