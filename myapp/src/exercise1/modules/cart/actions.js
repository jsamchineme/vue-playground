export default {
  addToCart({ commit }, product) {
    commit('ADD_CART_ITEM', product);
  },
  removeFromCart({ commit }, product) {
    commit('REMOVE_CART_ITEM', product);
  },
};
