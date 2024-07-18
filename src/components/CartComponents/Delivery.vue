<template>
  <div class="delivery-form">
    <h2 class="text-3xl">Adresse de Livraison</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="address">Adresse</label>
        <input type="text" id="address" v-model="form.address" required />
      </div>

      <div class="form-group">
        <label for="city">Ville</label>
        <input type="text" id="city" v-model="form.city" required />
      </div>

      <div class="form-group">
        <label for="postalCode">Code Postal</label>
        <input type="text" id="postalCode" v-model="form.postalCode" required />
      </div>

      <div class="form-group">
        <label for="country">Pays</label>
        <input type="text" id="country" v-model="form.country" required />
      </div>

      <h2 class="text-3xl">Mode de Livraison</h2>
      <div class="form-group">
        <label>
          <input type="radio" value="standard" v-model="form.deliveryMode" />
          Standard
        </label>
        <label>
          <input type="radio" value="express" v-model="form.deliveryMode" />
          Express
        </label>
        <label>
          <input type="radio" value="pickup" v-model="form.deliveryMode" />
          Pickup en magasin
        </label>
      </div>

    <button type="submit">Valider</button>
    </form>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/CartStore.js';
import { useRouter } from 'vue-router';

const router = useRouter();

export default {
  data() {
    return {
      form: {
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        deliveryMode: 'standard',
      },
    };
  },
  methods: {
    handleSubmit() {
      // Logique pour gérer la soumission du formulaire
      console.log(this.form);

      // Vider le panier après la soumission du formulaire
      const cartStore = useCartStore();
      cartStore.clearCart();

      router.push('/congrats');

    },
  },
};


</script>

<style scoped>
.delivery-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="radio"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #218838;
}
</style>
