<script setup>
import ListProductCart from '@/components/CartComponents/ListProductCart.vue'
import CartSummary from '@/components/CartComponents/CartSummary.vue'
import { ref } from 'vue'
import DeliveryAdressForm from '@/components/CartComponents/DeliveryAdressForm.vue'

const CommandeStep = ref(1)

function nextStep() {
  CommandeStep.value = 2
}
</script>

<template>
  <section
    class=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
      <div v-if="CommandeStep === 1" class="grid grid-cols-12">
        <ListProductCart></ListProductCart>
        <CartSummary></CartSummary>
      </div>
      <div v-if="CommandeStep === 2" class="grid grid-cols-12">
        <DeliveryAdressForm></DeliveryAdressForm>
        <CartSummary></CartSummary>
      </div>
    </div>
  </section>


</template>
