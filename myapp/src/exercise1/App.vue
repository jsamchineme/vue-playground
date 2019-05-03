<template>
  <div>
    <product-list />
    <cart-list />
  </div>
</template>

<script>
import ProductList from '@/exercise1/ProductList.vue';
import CartList from '@/exercise1/CartList.vue';

export default {
  name: 'CartApp',
  components: {
    ProductList,
    CartList,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  padding: 20px;
}
</style>
