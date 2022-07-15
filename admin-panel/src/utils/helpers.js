export const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      currency: "COP",
      style: "currency",
      minimumFractionDigits: 0,
    }).format(price);
  };