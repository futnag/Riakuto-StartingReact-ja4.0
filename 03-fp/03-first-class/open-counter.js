let COUNT = 0; // グローバル変数！

const increment = () => {
  return (COUNT += 1);
};

console.log(increment());
