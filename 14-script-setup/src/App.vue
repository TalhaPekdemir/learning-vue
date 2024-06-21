<template>
  <h3 :class="{ 'bg-red': bgClassToggle, 'bg-green': !bgClassToggle }">{{ title }}</h3>
  <input type="text" v-model="title">
  <button @click="inc">{{ counter }}</button>
  <hr>
  <oddOrEven :counter="counter" @odd-event="setBgRedFlag" />
  <hr>
  <input type="text" v-model="state.person.name">
  <input type="text" v-model="state.person.lastname">
  {{ state.person.name }} {{ state.person.lastname }}
  <br>
  {{ state }}
</template>

<script setup>
import { reactive, watch } from "vue";
import oddOrEven from "./components/oddOrEven.vue";
import abcs from "./composables/abcs";

const { title, counter, inc, bgClassToggle, setBgRedFlag } = abcs();

const state = reactive({
  person: {
    name: "",
    lastname: "",
  }
})

/**
 * ???
 * reactive i direkt izlemek mümkün değil
 * direkt izlenecek parametreye objeyi vermek çalışmıyor çünkü
 * new de old da aynı objeyi point ediyor.
 * deep de işe yaramıyor.
 * Workaround olarak objeyi json stringine çevirip ardından 
 * tekrar parse etmek bellek adresidnen tamamen kopardığı için 
 * başarılı şekilde eski ve yeni değeri izlenebiliyor.
 * Arrow func sebebi de JSON.parse'ın bir değer return ediyor
 * olması ve bunun execute edilmesi ihtiyacı.
 * 
 * Watch kullanılacaksa ref ile izlenmesi tavsiye ediliyor.
 * Ancak çok propa sahip bir obje de izlenmek istenirse şu anlık
 * en güvenilir sonuç veren yöntem bu.
 */
watch(
  () => JSON.parse(JSON.stringify(state.person)),
  (newValue, oldValue) =>
    console.log(oldValue, "=>", newValue),
  // { deep: true }
);

</script>

<style>
.bg-red {
  background-color: red;
}

.bg-green {
  background-color: green;
}
</style>