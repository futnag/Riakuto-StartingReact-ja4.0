interface Status {
  // インデックスシグネチャ
  [parameter: string]: number;
}

const myStatus: Status = {
  level: 22,
  experience: 3058,
  maxHP: 156,
  maxMP: 174,
  attack: 39,
  defense: 25,
  // job: 'mage',
  job: 213,
};

console.log(myStatus);
