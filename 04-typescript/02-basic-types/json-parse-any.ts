{
  // const str = `{ "id": 1, "username": "patty" }`;
  const str = `{ "id": 1, "username": "patty", "address" : { "zipCode" : 1230123} }`;
  const user = JSON.parse(str);

  console.log(user.id, user.address.zipCode);
}
