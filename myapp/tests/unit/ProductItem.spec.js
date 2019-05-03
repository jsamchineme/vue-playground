import { shallowMount } from '@vue/test-utils';
import ProductItem from '@/exercise1/ProductItem.vue';
import testHelpers from '@/exercise1/utils/testHelpers';

describe('ProductItem.vue', () => {
  let wrapper;
  const mockProduct = {
    id: 1,
    name: 'Towel',
    price: 5000,
    quantityInStock: 200,
  };
  const propsData = {
    ...mockProduct,
    type: 'cartItem',
    updateStatus: jest.fn(),
  };
  const mountComponent = () => {
    wrapper = shallowMount(ProductItem, {
      propsData,
    });
    testHelpers.wrapper = wrapper;
    return wrapper;
  };

  beforeEach(() => {
    mountComponent();
    testHelpers.wrapper = wrapper;
  });

  it('renders product-item with type of productItems required components', () => {
    propsData.type = 'productItem';
    wrapper = mountComponent();
    mountComponent();
    testHelpers.seeElement('.product-item');
    testHelpers.seeElement('.product-item-body');
    testHelpers.seeString(`Price: ${mockProduct.price}`);
    testHelpers.seeString('Add to Cart');
    testHelpers.seeString(`Stock available: ${mockProduct.quantityInStock}`);
  });

  it('renders product-item with type of productItem', () => {
    propsData.type = 'cartItem';
    wrapper = mountComponent();
    testHelpers.seeElement('.product-item');
    testHelpers.seeElement('.product-item-body');
    testHelpers.seeString(`Price: ${mockProduct.price}`);
    testHelpers.seeString(`Stock available: ${mockProduct.quantityInStock}`);
    testHelpers.seeString('Remove');
  });

  it('handle clicks of the buttons', async () => {
    const button = wrapper.find('button.action-button');
    await button.trigger('click');
    expect(propsData.updateStatus).toHaveBeenCalled();
  });

  it('handles product-items with data where existsInCart is true', () => {
    wrapper = mountComponent();
    wrapper.setData({
      existsInCart: true,
    });
    expect(wrapper.vm.existsInCart).toBe(true);
  });
});
