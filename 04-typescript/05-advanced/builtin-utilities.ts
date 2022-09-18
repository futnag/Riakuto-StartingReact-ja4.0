/*
組み込みのユーティリティ型

Partial<T> : T のプロパティをすべて省略可能にする
Required<T> : T のプロパティをすべて必須にする
Readonly<T> : T のプロパティをすべて読み取り専用にする

上記を独自に定義すると、以下のようになる

*/

type MyPartial<T> = { [K in keyof T]?: T[K] };

type MyRequired<T> = { [K in keyof T]: T[K] };

type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

/*
Pick<T, K> : T から K が指定するキーのプロパティだけを抽出する
Omit<T, K> : T から K が指定するキーのプロパティを省く

Extract<T, U> : T から U の要素だけを抽出する
Exclude<T, U> : T から U の要素を省く

NonNullable<T> : T から null と undefined を省く ( tsconfig に strictNullChecks: true が必要 )

Record<K, T> : K の要素をキーとし、プロパティ値の型を T としたオブジェクトの型を作る

Parameters<T> : T の引数の型を抽出し、タプル型で帰す
ReturnType<T> : T の戻り値の型を返す

Uppercase<T> : T の各要素の文字列を全て大文字にする
Lowercase<T> : T の各要素の文字列を全て小文字にする
Capitalize<T> : T の各要素の文字列の頭を全て大文字にする
Uncapitalize<T> : T の各要素の文字列の頭を全て小文字にする

*/
