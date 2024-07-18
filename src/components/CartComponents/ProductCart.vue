<script setup>
import { ref } from 'vue'
import TrashBinIcon from '@/assets/CartIcons/TrashBinIcon.vue'
import { useCartStore} from '@/stores/CartStore.js'
const CartStore = useCartStore()

const props = defineProps({
  article: {
    type: Object,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  TotalPrice: {
    type: Number,
    default: 0
  },
  link: {
    type: String,
    default: ''
  },
})

const ProductTotalPrice = ref(props.article['price'] * props.quantity)


</script>

<template>

  <div class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
    <div class="w-full md:max-w-[126px]">
      <router-link :to=props.link>
        <img class="object-scale-down h-48 w-96" :src="props.article.img_url " alt="product image" />
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 w-full">
      <div class="md:col-span-2">
        <div class="flex flex-col max-[500px]:items-center gap-3">
          <h6 class="font-semibold text-base leading-7 text-black">{{ props.article.title }}</h6>
          <h6 class="font-normal text-base leading-7 text-gray-500">{{ props.article.category }}</h6>
          <h6
            class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
            ${{ props.article.price }}</h6>
        </div>
      </div>
      <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
        <div class="flex items-center h-full">
          <button @click="CartStore.removeOne(props.article)"
            class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                 xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                 viewBox="0 0 22 22" fill="none">
              <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                    stroke-linecap="round" />
              <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                    stroke-linecap="round" />
              <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                    stroke-linecap="round" />
            </svg>
          </button>
          <p
            class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
          >{{ quantity }}</p>
          <button
            @click="CartStore.addOne(props.article)"
            class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                 xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                 viewBox="0 0 22 22" fill="none">
              <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                    stroke-linecap="round" />
              <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                    stroke-width="1.6" stroke-linecap="round" />
              <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                    stroke-width="1.6" stroke-linecap="round" />
            </svg>
          </button>
          <button
            @click="CartStore.removeItem(props.article.id)"
            class="p-5">
            <TrashBinIcon />
          </button>
        </div>
      </div>
      <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
        <p
          class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
          {{ ProductTotalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>