<template>
  <section id="product-list">
    <product-item
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :quantity-in-stock="product.quantityInStock"
      :price="product.price"
      @add-item="addToCart(product)"
      :update-status="updateAddedItems"
      type="productItem"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProductItem from '@/exercise1/ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters([
      'products',
    ]),
  },
  methods: {
    ...mapActions([
      'addToCart',
      'updateAddedItems',
    ]),
  },
};
</script>

<style scoped lang="scss">
#product-list {
  width: 80%;
  min-height: 400px;
  background-color: gray;
  float: left;
  height: 700px;
  overflow: scroll;
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 40px;
}
</style>
