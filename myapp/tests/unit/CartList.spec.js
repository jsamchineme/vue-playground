import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import testHelpers from '@/exercise1/utils/testHelpers';
import CartList from '@/exercise1/CartList.vue';
import ProductItem from '@/exercise1/ProductItem.vue';
import cartModule from '@/exercise1/modules/cart';
import mockProducts from '@/__mock__/products';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('CartList.vue', () => {
  let wrapper;
  let store;
  let actions;
  let state = {
    cart: {
      products: [],
    },
  };

  const mountComponent = () => {
    actions = {
      updateRemovedItems: jest.fn(),
      removeFromCart: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        cart: {
          ...cartModule,
          state,
          actions,
        },
      },
    });
    wrapper = mount(CartList, { store, localVue });
    testHelpers.wrapper = wrapper;
    return wrapper;
  };

  it('does not show product items when cart is empty', () => {
    mountComponent();
    testHelpers.notSeeElement('.product-item');
    testHelpers.notSeeElement(ProductItem);
  });

  it('lists products items when item exist in cart ', () => {
    state = {
      cart: {
        products: mockProducts,
      },
    };
    wrapper = mountComponent();
    testHelpers.seeElement(ProductItem);
    testHelpers.seeElement('.product-item');
  });

  it('handles actions called on clicks', async () => {
    state = {
      cart: {
        products: mockProducts,
      },
    };
    wrapper = mountComponent();
    const button = wrapper.find('button.action-button');
    await button.trigger('click');
    expect(actions.removeFromCart).toHaveBeenCalled();
    expect(actions.updateRemovedItems).toHaveBeenCalled();
  });
});
