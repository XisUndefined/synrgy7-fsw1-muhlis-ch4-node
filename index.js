// kubus balok sama prisma
const kubus = require("./kubus");
const balok = require("./balok");
const prisma = require("./prisma");

console.log(
  `Volume kubus dengan sisi 12 adalah ${kubus.volume(
    12
  )} dan luas permukaan ${kubus.luasPermukaan(12)}`
);
console.log(
  `Volume balok dengan panjang, lebar, tinggi secara berurutan 3, 5, 6 adalah ${balok.volume(
    3,
    5,
    6
  )} dan luas permukaan ${balok.luasPermukaan(3, 5, 6)}`
);
console.log(
  `Volume prisma dengan sisi alas dan tinggi 6 dan 8 adalah ${prisma.volume(
    6,
    8
  )} dan luas permukaan ${prisma.luasPermukaan(6, 8)}`
);
