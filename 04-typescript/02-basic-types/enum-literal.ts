enum Pet {
  Cat,
  Dog,
  Rabbit,
}

console.log(Pet.Cat, Pet.Dog, Pet.Rabbit); // 0 1 2
console.log(Pet); // { '0': 'Cat', '1': 'Dog', '2': 'Rabbit', Cat: 0, Dog: 1, Rabbit: 2 }

// enum は型安全ではない
let Tom: Pet = Pet.Cat;
console.log(Tom); // 0
Tom = Pet.Dog;
Tom = 12;
console.log(Tom); // 12

// 文字列 Enum なら、ちょっと安全

enum StringPet {
  Cat = "Cat",
  Dog = "Dog",
  Rabbit = "Rabbit",
}

let Sam: StringPet = StringPet.Cat;
// Sam = 'mouse' // error
console.log(Sam);
console.log(StringPet);

// リテラル型
let Bob: "cat" = "cat";
// Bob =  'mouse' // error

// ユニオン型
let Mary: "Cat" | "Dog" | "Rabbit" = "Cat";
Mary = "Rabbit";
// Mary = 'Parrot' // error
