import cart from '@/exercise1/modules/cart';
import productItems from '@/exercise1/modules/productItems';
import products from '@/exercise1/products';

const storeConfig = {
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
};

export default storeConfig;
