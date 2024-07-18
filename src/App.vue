<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
// import { useUserStore } from '@/stores/UserStore.js'
// const userStore = useUserStore()

</script>

<template>
  <header>
    <NavBar />
  </header>
  <body>
  <div class="max-w-screen-xl items-center mx-auto p-4">
    <RouterView />
  </div>
  </body>
  <footer>
    <Footer />
  </footer>

</template>

<style scoped>

</style>
