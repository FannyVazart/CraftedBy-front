<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 0
  },
})
</script>

<template>
  <li>
    <a :href=props.link class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <slot name="icon"></slot>
      <span class="flex-1 ms-3 whitespace-nowrap uppercase font-semibold">{{ props.text}}</span>
    </a>
  </li>
</template>

<style scoped>

</style>