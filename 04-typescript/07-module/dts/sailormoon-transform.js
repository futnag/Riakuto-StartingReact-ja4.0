"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrisisCompact = exports.CosmicCompact = exports.Brooch = exports.transform = void 0;
class Brooch {
    pentagram = "Silver Crystal";
}
exports.Brooch = Brooch;
class CosmicCompact {
    silverCrystal = true;
    cosmicPower = true;
}
exports.CosmicCompact = CosmicCompact;
class CrisisCompact {
    silverCrystal = true;
    moonChalice = true;
}
exports.CrisisCompact = CrisisCompact;
function transform(item) {
    if (item instanceof Brooch) {
        console.log("Moon crystal power💎, make up!!");
    }
    else if (item instanceof CosmicCompact) {
        console.log("Moon cosmic power💖, make up!!!");
    }
    else if (item instanceof CrisisCompact) {
        console.log("Moon crisis🏆, make up!");
    }
    else if (!item) {
        console.log("Moon prisim power🌙, make up!");
    }
    else {
        console.log("Item is fake...😖");
    }
}
exports.transform = transform;
