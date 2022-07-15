export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
  }).format(price);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ["all", ...new Set(unique)];
};
