const volume = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};

const luasPermukaan = (panjang, lebar, tinggi) => {
  return 2 * (panjang * lebar + lebar * tinggi + panjang * tinggi);
};

module.exports = { volume, luasPermukaan };
