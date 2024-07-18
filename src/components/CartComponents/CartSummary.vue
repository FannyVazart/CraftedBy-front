<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/CartStore.js'
import { useUserStore } from '@/stores/UserStore.js'
import { useRouter } from 'vue-router'

const CartStore = useCartStore()
const UserStore = useUserStore()
const router = useRouter()

const isAuthenticated = computed(() => UserStore.getIsConnected)
const isCartEmpty = computed(() => CartStore.totalQuantity === 0)

const handleOrder = () => {
  if (isCartEmpty.value) return
  if (isAuthenticated.value) {
    router.push('/delivery')
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <div class="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
    <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
      Order Summary
    </h2>
    <div class="mt-8">
      <div class="flex flex-col">
        <div class="flex items-center justify-between pb-6">
          <p class="font-normal text-lg leading-8 text-black">{{ CartStore.totalQuantity }} Items</p>
          <p class="font-medium text-lg leading-8 text-black px-6">${{ CartStore.totalPrice.toFixed(2) }}</p>
        </div>
      </div>
      <form class="pt-5" @submit.prevent="handleOrder">
        <button
          type="button"
          :disabled="isCartEmpty"
          @click="handleOrder"
          class="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed">
          Commander
        </button>
        <div class="flex justify-end">
          <p>+ $2.99 de frais de livraison</p>
        </div>
      </form>

    </div>
  </div>
</template>

<style scoped>
/* Add any specific styles you need */
</style>
