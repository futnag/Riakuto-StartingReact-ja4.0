{
  type User = { username: string; address: { zipcode: string; town: string } };

  const str = `{ "username": "patty", "town": "Maple Town" }`;
  const data: unknown = JSON.parse(str);
  const user = data as User;

  // console.log(user.address.town); // TypeError: Cannot read property 'town' of undefined
}

const n = 123;
const s1 = String(n);
console.log(typeof s1); // string
// const s2 = n as string // error
const s3 = 123 as unknown as string; // 一度 unknown を挟めば、コンパイルは通ってしまう
console.log(s3.split("2")); // error
