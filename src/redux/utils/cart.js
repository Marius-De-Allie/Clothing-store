const addItemToCart = (cartItems, newItem) => {
    const existingItem = cartItems.find(item => item.id === newItem.id);

    if(existingItem) {
        return cartItems.map(cartItem => cartItem.id === newItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    } else {
        return [...cartItems, {...newItem, quantity: 1}]
    }
};

export { addItemToCart };