<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-2xl font-bold mb-4">Welcome to your profile!</h1>
    <div>
      {{ userStore.getToken }}
      {{ userStore.user.email }}
    </div>
    <button @click="userStore.logout()" class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
      Logout
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/UserStore.js';

const router = useRouter();
const userStore = useUserStore();


</script>

<style scoped>
/* Ajoutez des styles supplémentaires ici, si nécessaire */
</style>
