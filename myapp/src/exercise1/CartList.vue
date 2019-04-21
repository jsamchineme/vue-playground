<template>
  <section id="cart">
    <product-item
      v-for="product in cartProducts"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :quantity-in-stock="product.quantityInStock"
      :price="product.price"
      @remove-item="removeFromCart(product)"
      :update-status="updateStatus"
      type="cartItem"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProductItem from '@/exercise1/ProductItem.vue';

export default {
  name: 'CartList',
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters([
      'cartProducts',
    ]),
  },
  methods: {
    ...mapActions([
      'updateRemovedItems',
      'removeFromCart',
    ]),
    updateStatus() {
      this.updateRemovedItems(this.cartProducts);
    },
  },
};
</script>

<style lang="scss">
#cart {
  min-height: 400px;
  width: 19%;
  background-color: #4e4e4e;
  color: black;
  float: left;
  height: 700px;
  overflow: scroll;
  margin-left: 1%;
  border-radius: 10px;
}
</style>
