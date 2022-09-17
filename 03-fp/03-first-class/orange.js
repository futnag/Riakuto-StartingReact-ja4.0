// let friendship;

if (true) {
  const he = "Kakeru";
  const saveHim = () => {
    console.log(`${he} is alive!`);
  };
  friendship = saveHim;
}

/*
自由変数 he は if 文のブロックスコープを外れたら誰からも参照されなくなる。
だが、外部からの参照が残っていれば、自由変数は GC に掃除されずに残り続ける
*/
friendship();
