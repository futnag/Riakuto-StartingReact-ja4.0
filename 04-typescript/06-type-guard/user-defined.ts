interface User {
  username: string;
  address: {
    zipcode: string;
    town: string;
  };
}

// arg is User -> 型述語（Type Predicate） true であれば、arg は User であるとコンパイラが判断する
const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return (
    typeof u?.username === "string" &&
    typeof u?.address?.zipcode === "string" &&
    typeof u?.address?.town === "string"
  );
};

const u1: unknown = JSON.parse("{}");
const u2: unknown = JSON.parse(
  '{ "username": "patty", "address": "Maple Town" }'
);
const u3: unknown = JSON.parse(
  '{ "username": "patty", "address": { "zipcode": "111", "town": "Maple Town" } }'
);

[u1, u2, u3].forEach((u) => {
  if (isUser(u)) {
    console.log(`${u.username} lives in ${u.address.town}`);
  } else {
    console.log("It's not User");
    // console.log(`${u.username} lives in ${u.address.town}`);
  }
});
