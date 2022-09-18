interface Resident {
  familyName: string;
  lastName: string;
  mom?: Resident;
}

// const getMomName = (resident: Resident): string => resident.mom.lastName;
// ! : 非 null アサーション演算子。null も undefined も入らないと宣言する
// 業務コードでは非推奨。ランタイムエラーになりうる
// const getMomName = (resident: Resident): string => resident.mom!.lastName;

// ちゃんと null チェックする
const getMomName = (resident: Resident): string => {
  return resident.mom ? resident.mom?.lastName : "mom is null or undefined";
};

const patty = { familyName: "Hope-Rabbit", lastName: "patty" };
console.log(getMomName(patty));
