<script setup>
import EcommerceCard from '@/components/EcommerceCard.vue'
import Pagination from '@/components/HomeComponents/Pagination.vue'
import CategoryList from '@/components/HomeComponents/CategoryList.vue'

import { useProductsStore } from '@/stores/Productstore.js'
import {onMounted, ref } from 'vue'


const ProductStore = useProductsStore();

onMounted(async () => {
  try {
    await ProductStore.fetchProducts();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const handleupdate = (value) => {
  ProductStore.fetchProducts(value)
}

</script>

<template>
  <!-- <div class="flex">
    <CategoryList
    @update="handleupdate"
    ></CategoryList>
    <button @click="handleupdate(null)" type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
      reset
    </button>
  </div> -->
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-5">
    <li v-for="product in ProductStore.getProducts" :key="product.id"
    >
      <EcommerceCard
        :article="product"
        :link="'/product/' + product.id"
      >
      </EcommerceCard>

    </li>
  </ul>
  <div class="flex justify-items-end">
    <!-- <div>
      <Pagination></Pagination>
    </div> -->
  </div>
</template>

<style scoped>

</style>