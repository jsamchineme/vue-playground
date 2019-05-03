import actions from './actions';
import mutations from './mutations';

export default {
  state: {
    cart: {
      products: [],
    },
  },
  mutations,
  actions,
  getters: {
    cartProducts: state => state.cart.products,
  },
};
