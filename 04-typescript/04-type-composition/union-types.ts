import { isArgumentsObject } from "util/types";

interface A {
  foo: number;
  bar?: string;
}
interface B {
  foo: string;
}
interface C {
  bar: string;
}
interface D {
  baz: boolean;
}

type AorB = A | B; // { foo: number; bar?: string } or { foo: string }
type AorC = A | C; // { foo: number; bar?: string } or { bar: string }
type AorD = A | D; // { foo: number; bar?: string } or { baz: boolean }

const ab1: AorB = { foo: 12, bar: "test" };
const ab2: AorB = { foo: "test" };

console.log(ab1);
console.log(ab2);

const ac: AorC = { bar: "test" }; // foo 必須ではない
console.log(ac);

const ad: AorD = { foo: 123, baz: true };
console.log(ad);
