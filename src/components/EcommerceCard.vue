<script setup>
import { useCartStore } from '@/stores/CartStore.js'
import RatingStars from '@/components/HomeComponents/RatingStars.vue'

const CartStore = useCartStore()

const props = defineProps({
  article: {
    type: Object,
    required: true
  },
  link: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <div class="m-h-48 m-w-96">
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <router-link :to=props.link>
          <img class="object-scale-down h-48 w-96 p-2.5" :src="props.article.img_url" alt="product img" />
        </router-link>
      </div>
      <div class="px-5 pb-5">
        <div class="flex items-center text-black mt-2.5 mb-5">
          <!-- <div v-for="(index) in 5" :key="index">
            <RatingStars
              :fill="index < props.article.rating.rate ? 'currentColor' : '#D3D5D8'"
            ></RatingStars> -->
          <!-- </div> -->
          <!-- <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {{ props.article.rating.rate }}
          </span> -->
          {{ props.article.description }}
        </div>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold text-gray-900 dark:text-white">{{ props.article['price'] }}$</span>
          <button @click="CartStore.addItem(props.article)"
                  class="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>