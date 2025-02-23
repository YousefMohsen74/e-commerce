// lib/cartStore.js
let cartStore = new Map();

export function getServerCart() {
    return Array.from(cartStore.values());
}

export function addToServerCart(product) {
    const existingProduct = cartStore.get(product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
        cartStore.set(product.id, existingProduct);
    } else {
        cartStore.set(product.id, { ...product, quantity: 1 });
    }
}

export function clearServerCart() {
    cartStore.clear();
}