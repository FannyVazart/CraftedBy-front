<script setup>
import { useCounterStore } from '@/stores/counter'
const countStore = useCounterStore()


</script>

<template>
  <h1>Je compte pour du beurre</h1>
<h1>{{ countStore.count }}</h1>
  <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="countStore.increment()">Increment moi</button>

  <button class="button-primary-default">coucou</button>

</template>

