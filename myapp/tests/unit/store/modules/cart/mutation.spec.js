import cart from '@/exercise1/modules/cart';
import mockProducts from '@/__mock__/products';

describe('mutations on the cart module', () => {
  let state;

  beforeEach(() => {
    state = {
      cart: {
        products: [],
      },
    };
  });

  it('handles the ADD_CART_ITEM mutation', () => {
    cart.mutations.ADD_CART_ITEM(state, mockProducts[0]);
    expect(state.cart.products[0]).toEqual(mockProducts[0]);
  });

  it('does not add item when already added', () => {
    cart.mutations.ADD_CART_ITEM(state, mockProducts[0]);
    expect(state.cart.products.length).toEqual(1);
    cart.mutations.ADD_CART_ITEM(state, mockProducts[0]);
    expect(state.cart.products.length).toEqual(1);
  });

  it('handles the REMOVE_CART_ITEM mutation', () => {
    cart.mutations.ADD_CART_ITEM(state, mockProducts[0]);
    cart.mutations.REMOVE_CART_ITEM(state, mockProducts[0]);
    expect(state.cart.products).toEqual([]);
  });
});
