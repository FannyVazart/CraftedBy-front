// stores/cartStore.js
import { defineStore } from 'pinia';


export const useCartStore = defineStore('cart', {
  // The state is a function that returns an object
  state: () => ({
    items: [],

  }),
  // The getters are used to get the state of the store
  getters: {
    totalItems(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice(state) {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    totalQuantity(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    }
  },
  // The actions are used to change the state of the store
  actions: {
    addItem(product) {
      const existingItem = this.items.findIndex(item => item.id === product.id);
      console.log('existingItem', existingItem);
      console.log('product', product);
      if (existingItem >= 0) {
        this.items[existingItem].quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    async addOne(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    async removeOne(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity <= 0) {
          this.removeItem(product);
        }
      }
    },
    removeItem(product) {
      this.items = this.items.filter(item => item.id !== product.id);
    },

    clearCart() {
      this.items = [];

    },
  },
  persist:true
});
