const counter = () => {
  let count = 0;

  const countUp = () => {
    return (count += 1);
  };

  return countUp;
};

const increment = counter();

[...Array(10).keys()].map((e) => {
  console.log(increment());
});

// 別の書き方
const counter2 =
  (count = 0) =>
  (adds = 1) =>
    (count += adds);
const increment2 = counter2();

[...Array(10).keys()].map((e) => {
  console.log(increment2());
});
