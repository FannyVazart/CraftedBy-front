<script setup>
import { useCartStore } from '@/stores/CartStore.js'
import ProductCart from '@/components/CartComponents/ProductCart.vue'

const CartStore = useCartStore()
</script>

<template>
  <div class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
    <div class="flex items-center justify-between pb-8 border-b border-gray-300">
      <h2 class="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
      <h2 class="font-manrope font-bold text-xl leading-8 text-gray-600">{{ CartStore.totalQuantity }} Items</h2>
    </div>
    <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
      <div class="col-span-12 md:col-span-7">
        <p class="font-normal text-lg leading-8 text-gray-400">Product Details</p>
      </div>
      <div class="col-span-12 md:col-span-5">
        <div class="grid grid-cols-5">
          <div class="col-span-3">
            <p class="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
          </div>
          <div class="col-span-2">
            <p class="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
          </div>
        </div>
      </div>
    </div>
    <div v-for="item in CartStore.items" :key="item.id">
      <ProductCart
        :quantity="item.quantity"
        :TotalPrice=CartStore.totalPrice
        :link="'/product/' + item.id"
        :article="item"
      ></ProductCart>
    </div>

    <button
      @click="CartStore.clearCart"
      class="text-center bg-red-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
      Clear Cart
    </button>
  </div>
</template>

<style scoped>

</style>