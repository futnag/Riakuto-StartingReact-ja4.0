{
  const str = `{ "id": 1, "username": "patty" }`;
  const user: unknown = JSON.parse(str);
  /*
  unknown型
  any の型安全版
  任意の型の値を代入できるが、それ自体は何のプロパティもプロトタイプメソッドも持たない
  */

  // オブジェクト型は 'unknown' です。というエラーになる
  // エラーを解消するためには、型ガードを使用する
  console.log(user.id, user.address.zipCode);
}
