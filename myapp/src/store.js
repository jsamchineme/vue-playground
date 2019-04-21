import Vue from 'vue';
import Vuex from 'vuex';
// importing modules
import cart from '@/exercise1/modules/cart';
import productItems from '@/exercise1/modules/productItems';
import products from '@/exercise1/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products,
  },
  getters: {
    products: state => state.products,
  },
  modules: {
    cart,
    productItems,
  },
});
