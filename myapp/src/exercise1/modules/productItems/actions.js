export default {
  updateAddedItems({ commit }, productItem) {
    commit('UPDATE_ADDED_ITEMS', productItem);
  },
  updateRemovedItems({ commit }, cartProducts) {
    commit('UPDATE_REMOVED_ITEMS', cartProducts);
  },
};
