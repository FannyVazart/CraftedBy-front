<template>
  <DialogRoot>
    <DialogTrigger as="button" class="block w-full">
      <ProfileAvatar />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Sign in</h3>
          <DialogClose type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </DialogClose>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5">
          <form @submit.prevent="loginUser" class="space-y-4">
            <div v-if="!isLoggedIn">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your e-mail</label>
              <input v-model="email" type="text" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            </div>
            <div v-if="!isLoggedIn">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input v-model="password" type="password" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required />
            </div>
            <div class="flex justify-between" v-if="!isLoggedIn">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login
            </button>
            <div v-if="isLoggedIn" class="text-center">
              <RouterLink to="/logout">
                <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Go to Profile
                </button>
              </RouterLink>
            </div>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300" v-if="!isLoggedIn">
              Not registered? <RouterLink to="/Register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</RouterLink>
            </div>
          </form>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from 'radix-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import ProfileAvatar from '@/assets/ProfileAvatar.vue';
import { useUserStore } from '@/stores/UserStore.js'

const email = ref('');
const password = ref('');
const isLoggedIn = ref(false);
const router = useRouter();
const userStore = useUserStore();

const loginUser = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: email.value,
      password: password.value,
    });

    // Stocker le token dans le stockage local (localStorage)
    localStorage.setItem('auth_token', response.data.token);
    // Mettre à jour le store utilisateur
    userStore.login(response.data.token);

    // Mettre à jour l'utilisateur dans le store avec les détails reçus
    userStore.updateUser(response.data.user);

    console.log('Connexion réussie', response.data);
    isLoggedIn.value = true;

    // Rediriger vers la vue du profil
    router.push('/logout');
  } catch (error) {
    console.error('Erreur lors de la connexion :', error.response.data);
    // Gérer l'affichage d'un message d'erreur à l'utilisateur si nécessaire
  }
};
</script>
