<template>
  <section :class="className">
    <header>{{ name }}</header>
    <div class="product-item-body">
      <div class="product-price">
        Price: {{ price }}
      </div>
      <div class="product-quantity">
        Stock available: {{ quantityInStock }}
      </div>
      <div>
        <button
          class="action-button"
          @click="$emit(action); update()"
        >
          {{ actionText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantityInStock: { type: Number, required: true },
    type: { type: String, required: true },
    updateStatus: { type: Function, required: true },
  },
  data() {
    return {
      existsInCart: false,
    };
  },
  computed: {
    action() {
      return this.type === 'cartItem' ? 'remove-item' : 'add-item';
    },
    actionText() {
      return this.type === 'cartItem' ? 'Remove' : 'Add to Cart';
    },
    className() {
      let className = 'product-item';
      className = this.existsInCart ? `${className} in-cart` : className;
      return className;
    },
  },
  methods: {
    update() {
      this.updateStatus(this);
    },
  },
};
</script>


<style scoped lang="scss">

.product-item {
  color: black;
  width: 33.33333%;
  float: left;
  padding: 10px;
  font-size: 18px;
}

#cart .product-item {
  width: 100%;
}

.product-item header {
  background-color: #eeeeee;
  padding: 10px;
  border-radius: 5px 5px 0px 0px;
  transition: all 300ms ease-in-out;
}
#cart .product-item header {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px 5px 0px 0px;
}

.product-item-body {
  background-color: #dad3cb;
  padding: 10px;
  color: black;
  border-radius: 0px 0px 5px 5px;
}

.product-item button {
  padding: 10px;
  color: white;
  background-color: #7b7677;
  border-radius: 3px;
  margin-top: 16px;
}

.product-item.in-cart header {
  background-color: black;
  color: white;
}
</style>
