<template>
  <label for="client_name" class="flex flex-col text-gray-400 mb-2">
    <small class="mb-1">Müşteri Adı</small>
    <input autocomplete="off" id="client_name" class="input" type="text" v-model="customer.name" />
  </label>
  <label for="client_email" class="flex flex-col text-gray-400 mb-2">
    <small class="mb-1">E-posta</small>
    <input autocomplete="off" id="client_email" class="input" type="email" v-model="customer.email" />
  </label>

  <div class="grid grid-cols-3 gap-5">
    <label for="city" class="flex flex-col text-gray-400 mb-2">
      <small class="mb-1">Şehir</small>
      <input autocomplete="off" id="city" class="input" type="text" v-model="customer.city" />
    </label>
    <label for="zip_code" class="flex flex-col text-gray-400 mb-2">
      <small class="mb-1">Posta Kodu</small>
      <input autocomplete="off" id="zip_code" class="input" type="text" v-model="customer.zipcode" />
    </label>
    <label for="country" class="flex flex-col text-gray-400 mb-2">
      <small class="mb-1">Ülke</small>
      <input autocomplete="off" id="country" class="input" type="text" v-model="customer.country" />
    </label>
  </div>
</template>

<script setup>
defineProps({
  customer: Object,
})
</script>