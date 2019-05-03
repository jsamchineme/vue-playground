import productItems from '@/exercise1/modules/productItems';
import mockProducts from '@/__mock__/products';

describe('mutations on the productItems module', () => {
  let state;
  let cartProducts;
  const product = mockProducts[0];
  const product1 = mockProducts[1];

  beforeEach(() => {
    state = {
      productItems: [],
    };
    cartProducts = [];
  });


  it('handles the UPDATE_ADDED_ITEMS mutation', () => {
    productItems.mutations.UPDATE_ADDED_ITEMS(state, product);
    expect(state.productItems[0]).toEqual(product);
    expect(product.existsInCart).toBe(true);
  });

  it('does not add item when already added', () => {
    productItems.mutations.UPDATE_ADDED_ITEMS(state, product);
    expect(state.productItems.length).toEqual(1);
    productItems.mutations.UPDATE_ADDED_ITEMS(state, product);
    expect(state.productItems.length).toEqual(1);
  });

  it('handles the UPDATE_REMOVED_ITEMS mutation', () => {
    // trigger mutation that adds 2 item
    productItems.mutations.UPDATE_ADDED_ITEMS(state, product);
    productItems.mutations.UPDATE_ADDED_ITEMS(state, product1);
    // manually add 1 product to the cartProducts array
    // We add 1 instead of 2
    // so that we simulate a case where 1 product has been
    // removed from the cart after 2 had been initially added
    cartProducts.push(product);

    productItems.mutations.UPDATE_REMOVED_ITEMS(state, cartProducts);
    expect(state.productItems.length).toEqual(cartProducts.length);
  });
});
