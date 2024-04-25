export const volume = (panjang, lebar, tinggi) => {
  return panjang * lebar * tinggi;
};

export const luasPermukaan = (panjang, lebar, tinggi) => {
  return 2 * (panjang * lebar + lebar * tinggi + panjang * tinggi);
};
