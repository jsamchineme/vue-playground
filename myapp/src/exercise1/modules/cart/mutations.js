export default {
  ADD_CART_ITEM(state, product) {
    const productInCart = state.cart.products.find(item => item.id === product.id);
    if (productInCart) return;

    state.cart.products.push(product);
  },
  REMOVE_CART_ITEM(state, product) {
    const cartProducts = state.cart.products.filter(item => item.id !== product.id);
    state.cart.products = cartProducts;
  },
};
