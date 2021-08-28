export const addItemToCart = (cartItems, addedItem) => {
  const existingItem = cartItems.find((item) => item.id === addedItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...addedItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removedItem) => {
  const existingItem = cartItems.find((item) => item.id === removedItem.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== removedItem.id);
  }

  return cartItems.map((item) =>
    item.id === removedItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
