import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import testHelpers from '@/exercise1/utils/testHelpers';
import ProductList from '@/exercise1/ProductList.vue';
import ProductItem from '@/exercise1/ProductItem.vue';
import mockProducts from '@/__mock__/products';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ProductList.vue', () => {
  let wrapper;
  let store;
  let actions;
  let state = {
    products: [],
  };
  const getters = {
    products: productsState => productsState.products,
  };

  const mountComponent = () => {
    actions = {
      updateAddedItems: jest.fn(),
      addToCart: jest.fn(),
    };
    store = new Vuex.Store({ state, getters, actions });
    wrapper = mount(ProductList, { store, localVue });
    testHelpers.wrapper = wrapper;
    return wrapper;
  };

  it('does not show product items when product list is empty', () => {
    mountComponent();
    testHelpers.notSeeElement('.product-item');
    testHelpers.notSeeElement(ProductItem);
  });

  it('lists products items when item exist in list ', () => {
    state = {
      products: mockProducts,
    };
    wrapper = mountComponent();

    testHelpers.seeElement(ProductItem);
    testHelpers.seeElement('.product-item');
  });

  it('handles actions called on clicks', async () => {
    state = {
      products: mockProducts,
    };
    wrapper = mountComponent();
    const button = wrapper.find('button.action-button');
    await button.trigger('click');
    expect(actions.addToCart).toHaveBeenCalled();
    expect(actions.updateAddedItems).toHaveBeenCalled();
  });
});
