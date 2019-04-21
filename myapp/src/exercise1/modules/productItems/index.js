import actions from './actions';
import mutations from './mutations';

export default {
  state: {
    productItems: [],
  },
  mutations,
  actions,
  getters: {
    productItems: state => state.productItems,
  },
};
