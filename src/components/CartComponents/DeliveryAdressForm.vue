<script setup>
import { useUserStore } from '@/stores/UserStore'
import { ref } from 'vue'

const UserStore = useUserStore()
UserStore.fetchUser()


const isEditing = ref(false)
const editAdress = () => {
  isEditing.value = !isEditing.value
}
const saveChanges = async () => {
  try {
    isEditing.value = false
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error)
  }
}

</script>

<template>
  <div class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
    <div class="p-6">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <h1 class="text-3xl font-bold mb-4 text-center">Adresse de livraison</h1>
        <div class="border-t border-gray-200">
          <div v-if="!isEditing">
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Nom</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ UserStore.user.name.firstname.toUpperCase() }} {{ UserStore.user.name.lastname.toUpperCase() }}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Adresse</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ UserStore.user.address.number }}
                {{ UserStore.user.address.street }}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Ville / Code Postal</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ UserStore.user.address.zipcode }}
                {{ UserStore.user.address.city }}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Téléphone</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ UserStore.user.phone }}</dd>
            </div>
            <div class="flex justify-between">
              <button
                @click="editAdress"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center  mt-4"
                type="button">
                Modifier l'adresse de livraison
              </button>
              <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center mt-4">
                Valider
              </button>
            </div>
          </div>
          <div v-if="isEditing">
            <form>
              <div class="mb-4">
                <label for="firstname" class="block text-gray-700 text-sm font-bold mb-2">Prénom:</label>
                <input
                  type="text"
                  id="firstname"
                  v-model="UserStore.user.name.firstname"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Votre prénom"
                >
              </div>
              <div class="mb-4">
                <label for="lastname" class="block text-gray-700 text-sm font-bold mb-2">Nom:</label>
                <input
                  type="text"
                  id="lastname"
                  v-model="UserStore.user.name.lastname"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Votre nom"
                >
              </div>
              <div class="mb-4">
                <label for="country" class="block text-gray-700 text-sm font-bold mb-2">Numéro:</label>
                <input
                  type="text"
                  id="numero"
                  v-model="UserStore.user.address.number"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
              </div>
              <div class="mb-4">
                <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Rue:</label>
                <input
                  type="text"
                  id="rue"
                  v-model="UserStore.user.address.street"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
              </div>
              <div class="mb-4">
                <label for="city" class="block text-gray-700 text-sm font-bold mb-2">Ville:</label>
                <input
                  type="text"
                  id="city"
                  v-model="UserStore.user.address.city"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Votre ville"
                >
              </div>
              <div class="mb-4">
                <label for="postalCode" class="block text-gray-700 text-sm font-bold mb-2">Code postal:</label>
                <input
                  type="text"
                  id="postalCode"
                  v-model="UserStore.user.address.zipcode"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Votre code postal"
                >
              </div>
              <div class="flex">
                <button @click="editAdress"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

