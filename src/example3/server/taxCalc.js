
export const getTax = (price = 0, state) => {
  let taxRate = 0;
  let taxAmount = 0;

  if (state === 'NY') {
    taxRate = 0.07;
    taxAmount = price * taxRate;
  } else if (state === 'PA') {
    taxRate = 0.06;
    taxAmount = price * taxRate;
  } else {
    taxRate = 0;
    taxAmount = price * taxRate;
  }

  return taxAmount;
};

export const getTotal = (price = 0, tax = 0) => {
  const total = price + tax;
  return total;
};
