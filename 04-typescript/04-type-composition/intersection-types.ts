interface T {
  foo: number;
}
interface U {
  bar: string;
}
interface V {
  foo?: number;
  baz: boolean;
}

type TnU = T & U; // { foo: number; bar: string }
type TnV = T & V; // { foo: number; baz: boolean }
type VnTorU = V & (T | U); // { foo: number; baz: boolean } or { foo?: number; bar: string; baz: boolean }

const tu: TnU = { foo: 12, bar: "hello" };
console.log(tu);

const tv: TnV = { foo: 123, baz: true }; // foo 省略できない
console.log(tv);

const vntoru: VnTorU = { foo: 123, baz: true };
console.log(vntoru);
