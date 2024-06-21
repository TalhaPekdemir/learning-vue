<template>
  <div class="container">
    <button class="red" @click="activeComponent = 'Red'">Red</button>
    <button class="green" @click="activeComponent = 'Green'">Green</button>
    <button class="blue" @click="activeComponent = 'Blue'">Blue</button>

    <!-- import edilen componentlerden hangisinin geleceği bilinmiyorsa kullanılabilir.
      prop ve slot ile veri gönderilebiliyor.
      ekrandan kaldırıldığında DOM'dan da kaldırılır. Yani içerdiği veriler silinir.
      Verileri tutması isteniyorsa keepAlive içinde kullanılmalı.
      virtual DOM ile yönetilir, veriler saklanır anack yine de görünen DOM'dan kaldırılır. -->
    <KeepAlive>
      <component :is="activeComponent" :text="'Proptext'">
        <template #default>
          <p class="bg-green text-white"> Template Green Component</p>
        </template>
      </component>
    </KeepAlive>
  </div>
</template>

<script>
import Red from './components/RedComponent.vue';
import Green from './components/GreenComponent.vue';
import Blue from './components/BlueComponent.vue';

export default {
  components: {
    Red,
    Green,
    Blue
  },
  data() {
    return {
      activeComponent: "Red",
    }
  },
}
</script>