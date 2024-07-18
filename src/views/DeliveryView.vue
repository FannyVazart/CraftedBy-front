<script setup lang="ts">

import Delivery from '@/components/CartComponents/Delivery.vue';
import { useCartStore } from '@/stores/CartStore.js';
const CartStore = useCartStore()

</script>

<template>
  <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
    Order Summary</h2>
  <div class="mt-8">
    <div class="flex flex-col">
      <div class="flex items-center pb-6">
        <div>
          <p class="font-normal text-lg leading-8 text-black px-6">{{ CartStore.totalQuantity }} Items</p>
          <p class="font-normal text-lg leading-8 text-black px-6">Total price</p>

        </div>
        <div>
          <p class="font-medium text-lg leading-8 text-black">${{ CartStore.totalPrice.toFixed(2) }}</p>
          <p class="font-medium text-lg leading-8 text-black">${{ (CartStore.totalPrice + 2.99).toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
<Delivery></Delivery>
</template>

<style scoped>

</style>