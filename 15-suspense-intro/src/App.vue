<script setup>
// import TodoList from './components/TodoList.vue';
// import UserList from './components/UserList.vue';

import { defineAsyncComponent, onErrorCaptured, ref } from "vue";

// asenkon olarak componentleri import et
const TodoList = defineAsyncComponent(() => import("./components/TodoList.vue"));
const UserList = defineAsyncComponent(() => import("./components/UserList.vue"));

// hata olursa nasıl yakalanıyor
const err = ref(null);
onErrorCaptured((e) => {
  err.value = e;
  return true;
})
</script>

<template>
  <!--Hata olunca gösterdik. Normalde kullanıcıya hata direkt gösterilmez-->
  <span v-if="err">{{ err }}</span>
  <!-- Hata oluşmazsa suspense kısmına geçilebilir. 
    Orada da hata olursa gösterilmediğini fark ettim. -->
  <Suspense v-else>
    <template #default>
      <!-- Suspense fragment yapısını takip etmez her iki slotu da yalnızca
        bir adet root eleman kabul eder. divin sebebi o. -->
      <div>
        <!-- User da todo da hazır olduğuda importu yapılsın.
          En başta değil. -->
        <UserList />
        <hr>
        <TodoList />
      </div>
    </template>
    <template #fallback>
      <!-- default hazır değilse alttakini göster.
        fallback in kayboluşunu asenkron importlar takip eder. -->
      Loading...
    </template>
  </Suspense>
</template>