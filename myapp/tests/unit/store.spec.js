/* eslint-disable no-underscore-dangle */
import store from '@/store';
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';


describe('Store.js', () => {
  const wrapper = new Vue({
    router,
    store,
    render: h => h(App),
  });

  it('renders App with Store', () => {
    expect(typeof store.dispatch === 'function').toBe(true);
    expect(typeof store.getters.products === 'object').toBe(true);
    expect(wrapper._isVue).toBe(true);
  });
});
