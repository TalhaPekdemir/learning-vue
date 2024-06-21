<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <app-side-bar :faturaList="faturaList" :deleteFatura="deleteFatura" :editFatura="editFatura" />
    <fatura-content :saveFatura="saveFatura" :activeFatura="state.activeFatura" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import appSideBar from './components/appSideBar.vue';
import faturaContent from './components/faturaContent.vue';

const faturaList = ref([]);
const state = reactive({ activeFatura: null });

const saveFatura = (fatura) => {
  faturaList.value.push(fatura);
};

const deleteFatura = (fatura) => {
  faturaList.value = faturaList.value.filter((f) => f.id != fatura.id)
}

const editFatura = (fatura) => {
  console.log('fatura', fatura)
  state.activeFatura = fatura;
}
</script>