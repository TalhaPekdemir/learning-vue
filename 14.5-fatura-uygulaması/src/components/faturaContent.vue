<template>
  <section class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
    <!-- FAtura Bilgileri -->
    <div>
      <heading-cmp title="Fatura Bilgileri" />
      <customer-info :customer="state.customerInfo" />
      {{ state.customerInfo }}
    </div>

    <div class="mt-5">
      <heading-cmp title="Fatura Kalemleri" />
      <fatura-ekle :items="state.items" :AddFaturaItem="AddFaturaItem" />
    </div>

    <!-- Summary -->
    <summary-cmp :items="state.items" />

    <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
    <div class="actionbar text-right my-5">
      <button class="purple-button" @click="onSubmit">Kaydet</button>
    </div>
  </section>
</template>

<script setup>
import headingCmp from './ui/headingCmp.vue';
import customerInfo from './customerInfo.vue';
import faturaEkle from './faturaEkle.vue';
import summaryCmp from './summaryCmp.vue'
import { provide, reactive, watch } from 'vue';

const props = defineProps({
  saveFatura: Function,
  activeFatura: [Object, null],
});

const state = reactive({
  id: null,
  customerInfo: {
    name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  },
  items: [],
});

const AddFaturaItem = () => {
  state.items.push({
    id: new Date().getTime(),
    name: null,
    qty: 0,
    unit_price: 0.0,
    total_price: 0.0,
  });
};

const DeleteFaturaItem = (item) => {
  state.items = state.items.filter(i => i.id != item.id);
}
provide("DeleteFaturaItem", DeleteFaturaItem);

const onSubmit = () => {
  let pId = state.id;
  if (!pId) {
    pId = new Date().getTime();
  }
  console.log('pID', pId)
  props.saveFatura({ ...state, id: pId });
  state.id = null;
  state.customerInfo = {
    name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  };
  state.items = [];
}

watch(() => props.activeFatura, () => {
  if (props.activeFatura) {
    state.id = props.activeFatura.id;
    state.customerInfo = { ...props.activeFatura.customerInfo };
    state.items = [...props.activeFatura.items];
  }
})
</script>