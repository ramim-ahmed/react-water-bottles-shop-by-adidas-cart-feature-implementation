const getCart = () => {
  const isCart = localStorage.getItem("cart");
  if (isCart) {
    return JSON.parse(isCart);
  }
  return [];
};

const saveToProductLS = (cart) => {
  const covertedCart = JSON.stringify(cart);
  localStorage.setItem("cart", covertedCart);
};

export const addToProductLS = (bottle) => {
  const cart = getCart();
  cart.push(bottle);
  saveToProductLS(cart);
};
