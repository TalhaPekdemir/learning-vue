<template>
  <div class="container">
    <!-- component içinde değişebilecek bir veri alanı oluşturmak için slot kullanılabilir.
      slot oluşturabilmek elemanın için self-closing olmaması gereklidir.  -->
    <ModalComponent>
      <template v-slot:title>
        <h1> {{ title }}</h1>
      </template>
      <template #content>
        <p>{{ content }}</p>
      </template>
      <template #default>
        Bu da default.
      </template>
    </ModalComponent>

  </div>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue';
export default {
  components: {
    ModalComponent
  },
  data() {
    return {
      title: "Modal Başlığı",
      content: "Lorem ipsum falandı filandı..."
    }
  }
}
</script>