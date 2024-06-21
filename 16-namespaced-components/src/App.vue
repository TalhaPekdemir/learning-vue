<script setup>
// bunu sürekli böyle her component için yapmak pek de iyi görünmeyebilir.
// import InputCmp from './components/Forms/InputCmp.vue';
// import SelectCmp from './components/Forms/SelectCmp.vue';
// import LabelCmp from './components/Forms/LabelCmp.vue';

// yerine şu tercih edilebilir:
import * as Form from "./components/form-components.js";
</script>

<template>
  <Form.LabelCmp>
    Başlık:
    <Form.InputCmp />
  </Form.LabelCmp>

  <Form.LabelCmp>
    Kategori:
    <Form.SelectCmp />
  </Form.LabelCmp>
</template>