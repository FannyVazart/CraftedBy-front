<script setup>
import { useUserStore } from '@/stores/UserStore.js'
import ProfileAvatar from '@/assets/ProfileAvatar.vue'
import SidebarButton from '@/components/UserComponents/SidebarButton.vue'
import Dashboard from '@/assets/DashboardIcons/Dashboard.vue'
import NotificationIcon from '@/assets/DashboardIcons/NotificationIcon.vue'
import MesInfosIcon from '@/assets/DashboardIcons/MesInfosIcon.vue'
import CommandesIcon from '@/assets/DashboardIcons/CommandesIcon.vue'
import MesProduitsIcon from '@/assets/DashboardIcons/MesProduitsIcon.vue'
import PreferencesIcon from '@/assets/DashboardIcons/PreferencesIcon.vue'
import { useFetch } from '@vueuse/core'


const userStore = useUserStore()
const decode = (token) => {
  return JSON.parse(
    decodeURIComponent(
      atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join(''),
    ),
  )
}
const decodedToken = decode(userStore.token)
const { data: user } = useFetch('https://fakestoreapi.com/users/' + decodedToken.sub).json()

</script>

<template>
<div class="flex">
  <a href="" class="flex items-center ps-2.5 mb-5">
    <div class="h-6 me-3 sm:h-7">
      <ProfileAvatar />
    </div>
    <span
      class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{{ user.name['firstname'].toUpperCase()
      }}  {{ user.name['lastname'].toUpperCase() }} </span>
  </a>
</div>
  <div class="flex">
    <aside id="logo-sidebar" class=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
           aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

        <ul class="space-y-2 font-medium">

          <SidebarButton text="Dashboard" link="">
            <template #icon>
              <Dashboard />
            </template>
          </SidebarButton>
          <SidebarButton text="Notifications" link="">
            <template #icon>
              <NotificationIcon />
            </template>
          </SidebarButton>
          <SidebarButton text="Mes informations" link="">
            <template #icon>
              <MesInfosIcon />
            </template>
          </SidebarButton>
          <SidebarButton text="Commandes" link="">
            <template #icon>
              <CommandesIcon />
            </template>
          </SidebarButton>
          <SidebarButton text="Mes Produits" link="">
            <template #icon>
              <MesProduitsIcon />
            </template>
          </SidebarButton>
          <SidebarButton text="Préférences" link="">
            <template #icon>
              <PreferencesIcon />
            </template>
          </SidebarButton>
          <li>
            <button @click="userStore.logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
          </li>
        </ul>

      </div>

    </aside>
<!--    <img src="/public/images/dashboardImage.png" alt="fulvdwssdfv" class="flex justify-items-start object-scale-down">-->

      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <!-- Vous pouvez ajouter une image ici si vous en avez une pour l'utilisateur -->
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Mes informations</div>
          <p class="mt-2 text-gray-500">Email: {{ user.email }}</p>
          <p class="mt-2 text-gray-500">Username: {{ user.username }}</p>
<!--          <p class="mt-2 text-gray-500">Password: {{ user.password }}</p>-->
          <p class="mt-2 text-gray-500">Name: {{ user.name['firstname'] }} {{ user.name['lastname'] }}</p>
          <p class="mt-2 text-gray-500">Address: {{ user.address['city'] }}, {{ user.address['street'] }}, {{ user.address.number }}, {{ user.address['zipcode'] }}</p>
          <p class="mt-2 text-gray-500">Phone: {{ user['phone'] }}</p>
        </div>
      </div>
    </div>


</template>

<style scoped>

</style>