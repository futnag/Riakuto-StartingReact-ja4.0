// tuples
const charAttrs: [number, string, boolean] = [1, "patty", true];
const spells: [number, ...string[]] = [7, "heal", "sizz", "snooz"];

const [id, username] = charAttrs;

console.log(id, username); // 1 'patty'
