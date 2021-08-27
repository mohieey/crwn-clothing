export const addItemToCart = (cartItems, addedItem) => {
  const existingItem = cartItems.find((item) => item.id === addedItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...addedItem, quantity: 1 }];
};
