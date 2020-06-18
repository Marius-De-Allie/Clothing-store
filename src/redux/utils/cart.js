const addItemToCart = (cartItems, newItem) => {
    const existingItem = cartItems.find(item => item.id === newItem.id);

    if(existingItem) {
        return cartItems.map(cartItem => cartItem.id === newItem.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    } else {
        return [...cartItems, {...newItem, quantity: 1}]
    }
};

const removeItemFromCart = (cartItems, itemToRemove) => {
    const exisitingItem = cartItems.find(item => item.id  === itemToRemove.id);

    if(exisitingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    } else {
        return cartItems.map(item => item.id === itemToRemove.id ? {...item, quantity: item.quantity - 1} : item);
    }
};

export { addItemToCart, removeItemFromCart };