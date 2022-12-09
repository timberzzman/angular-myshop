export function getCart(): any[] {
  const localValue = localStorage.getItem('myShopCart');
  if (localValue !== null) {
    return JSON.parse(localValue);
  }
  return [];
}

export function updateCart(newCart: any[]) {
  localStorage.setItem('myShopCart', JSON.stringify(newCart));
}

export function isInCart(productID: number): boolean {
  const localValue = localStorage.getItem('myShopCart');
  if (localValue !== null) {
    return JSON.parse(localValue).some((product: { id: number; }) => product.id === productID);
  }
  return false;
}

export function setElement(productID: number) {
  let cart = getCart();

  if (isInCart(productID)) {
    cart = cart.filter(product => product.id !== productID);
  } else {
    cart.push({id: productID, quantity: 1});
  }
  updateCart(cart);
}
