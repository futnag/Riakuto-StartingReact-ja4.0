const user = {
  id: 3,
  name: "Bobby Kumanov",
  username: "bobby",
  email: "bobby@maple.town",
};

console.log("keys: ", Object.keys(user));
console.log("values: ", Object.values(user));
console.log("entries: ", Object.entries(user));

Object.keys(user).map((k) => {
  console.log(k, user[k]);
});
Object.entries(user).map(([k, v]) => {
  console.log(k, v);
});
