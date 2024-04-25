export const volume = (alas, tinggi) => {
  const tinggiAlas = Math.sqrt(Math.pow(alas, 2) - Math.pow(alas / 2, 2));

  return ((alas * tinggiAlas) / 2) * tinggi;
};

export const luasPermukaan = (alas, tinggi) => {
  const tinggiAlas = Math.sqrt(Math.pow(alas, 2) - Math.pow(alas / 2, 2));

  return 3 * alas * tinggi + alas * tinggiAlas;
};
