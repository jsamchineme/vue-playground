<template>
  <section id="cart">
    <transition-group
      name="slide"
      tag="div"
    >
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
    </transition-group>
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

<style scoped lang="scss">
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

.slide-enter {
  transition: all 1s ease-in-out;
  margin-top: 0;
  opacity: 1;
}

.slide-enter-active {
  transition: all 1s ease-in-out;
  margin-top: 0;
  opacity: 1;
}

.slide-leave-active {
  transition: all 1s ease-in-out;
  margin-top: -200px;
  opacity: 0;
}
</style>
