import { shallowMount } from '@vue/test-utils';
import App from '@/exercise1/App.vue';
import ProductList from '@/exercise1/ProductList.vue';
import CartList from '@/exercise1/CartList.vue';


describe('App.vue', () => {
  it('renders required components', () => {
    const wrapper = shallowMount(App);

    expect(wrapper.contains(ProductList)).toBe(true);
    expect(wrapper.contains(CartList)).toBe(true);
  });
});
