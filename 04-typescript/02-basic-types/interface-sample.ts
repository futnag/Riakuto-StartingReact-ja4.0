interface Color {
  readonly rgb: string;
  opacity: number;
  alias?: string;
}

const tq: Color = { rgb: "00afcc", opacity: 1 };
tq.alias = "turquoise";
// tq.rgb = '03c1ff';

console.log(tq);

// すべてのプロパティから、オプショナルを取り除く
type AllColor = Required<Color>;

// すべてのプロパティをオプショナルにする
type PartialColor = Partial<Color>;

// すべてのプロパティを読み取り専用にする（再帰的にすべてのプロパティをreadonlyにするわけではない）
type ReadonlyColor = Readonly<Color>;
