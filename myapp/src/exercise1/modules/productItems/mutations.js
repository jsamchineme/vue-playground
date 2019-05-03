export default {
  UPDATE_ADDED_ITEMS(state, productItem) {
    const itemInCart = state.productItems.find(product => product.id === productItem.id);
    if (itemInCart) return;

    state.productItems.push(productItem);
    productItem.existsInCart = true;
  },
  UPDATE_REMOVED_ITEMS(state, cartProducts) {
    const updatedProductItems = [];
    state.productItems.forEach((item) => {
      item.existsInCart = cartProducts
        .find(product => product.id === item.id) !== undefined;

      if (item.existsInCart) {
        updatedProductItems.push(item);
      }
    });
    state.productItems = updatedProductItems;
  },
};
