Vue.component('product-item', {
  props: {
    id: { required: true},
    name: { required: true },
    price: { required: true },
    quantityInStock: { required: true},
    type: { required: true },
    updateStatus: { required: true },
  },
  data() {
    return {
      existsInCart: false
    }
  },
  computed: {
    action() {
      return this.type === 'cartItem' ? 'remove-item' : 'add-item'
    }, 
    actionText() {
      return this.type === 'cartItem' ? 'Remove' : 'Add to Cart'
    },
    className() {
      let className = 'product-item';
      return className = this.existsInCart ? `${className} in-cart` : className;
    },
  },
  methods: {
    update() {
      this.updateStatus(this);
    }
  },
  template: `
    <section :class="className">
      <header>{{ name }}</header>
      <div class='product-item-body'>
        <div class='product-price'>Price: {{ price }}</div>
        <div class='product-quantity'>Stock available: {{ quantityInStock }}</div>
        <div>
          <button class='action-button' @click="$emit(action); update()">{{ actionText }}</button>
        </div>
      </div>
    </section>`
});

Vue.component('product-list', {
  template: '<section><slot></slot></section>'
});

Vue.component('cart-product-list', {
  template: '<section><slot></slot></section>'
});

new Vue({
  el: '#root',
  data: {
    products,
    productItems: [],
    cart: {
      products: []
    },
  },
  methods: {
    addToCart(productId) {
      const productInCart = this.cart.products.find(item => item.id === productId);
      if(productInCart) return;

      const product = this.products.find(item => item.id === productId);
      this.cart.products.push(product);
    },
    updateAddedItems(productItem) {
      const itemInCart = this.productItems.find(product => product.id === productItem.id);
      if(itemInCart) return;

      this.productItems.push(productItem);
      productItem.existsInCart = true;
    },
    updateRemovedItems() {
      const updatedProductItems = [];
      this.productItems.forEach(item => {
        item.existsInCart = this.cart.products.find(product => product.id === item.id) !== undefined;
        if(item.existsInCart) {
          updatedProductItems.push(item);
        }
      });
      this.productItems = updatedProductItems;
    },
    removeFromCart(productId) {
      const products = this.cart.products.filter(item => item.id !== productId);
      this.cart.products = products;
    },
  }
});