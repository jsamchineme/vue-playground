<template>
  <div>
    <section id="product-list">
      <product-item
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :quantity-in-stock="product.quantityInStock"
        :price="product.price"
        @add-item="addToCart(product.id)"
        :update-status="updateAddedItems"
        type="productItem"
      />
    </section>
    <section id="cart">
      <product-item
        v-for="product in cart.products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :quantity-in-stock="product.quantityInStock"
        :price="product.price"
        @remove-item="removeFromCart(product.id)"
        :update-status="updateRemovedItems"
        type="cartItem"
      />
    </section>
  </div>
</template>

<script>
import products from './products';
import ProductItem from '@/exercise1/ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  data() {
    return {
      products,
      productItems: [],
      cart: {
        products: [],
      },
    };
  },
  methods: {
    addToCart(productId) {
      const productInCart = this.cart.products.find(item => item.id === productId);
      if (productInCart) return;

      const product = this.products.find(item => item.id === productId);
      this.cart.products.push(product);
    },
    updateAddedItems(productItem) {
      const itemInCart = this.productItems.find(product => product.id === productItem.id);
      if (itemInCart) return;

      this.productItems.push(productItem);
      productItem.existsInCart = true;
    },
    updateRemovedItems() {
      const updatedProductItems = [];
      this.productItems.forEach((item) => {
        item.existsInCart = this.cart.products
          .find(product => product.id === item.id) !== undefined;

        if (item.existsInCart) {
          updatedProductItems.push(item);
        }
      });
      this.productItems = updatedProductItems;
    },
    removeFromCart(productId) {
      const cartProducts = this.cart.products.filter(item => item.id !== productId);
      this.cart.products = cartProducts;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  padding: 20px;
}

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
